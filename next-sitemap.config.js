/** @type {import('next-sitemap').IConfig} */
/* eslint-disable @typescript-eslint/no-require-imports */
const { execFileSync } = require('child_process')
const fs = require('fs')
const path = require('path')
const PRODUCTS = require('./products.sitemap.json')

const APP_DIR = path.join(__dirname, 'src/app')
const PRODUCTS_ROOT = path.join(
  __dirname,
  'src/entities/product/constants/products',
)
const INSTRUCTION_SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
const MAIN_INSTRUCTION_SLUG = 'index'

let commitDates

function loadCommitDates() {
  if (commitDates) return commitDates

  commitDates = { root: __dirname, byPath: new Map() }

  try {
    const root = execFileSync('git', ['rev-parse', '--show-toplevel'], {
      cwd: __dirname,
      encoding: 'utf8',
    }).trim()
    const output = execFileSync(
      'git',
      ['-c', 'core.quotepath=false', 'log', '--format=%cI', '--name-only'],
      { cwd: root, encoding: 'utf8', maxBuffer: 20 * 1024 * 1024 },
    )
    let current = null

    for (const line of output.split(/\r?\n/)) {
      if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(line)) {
        current = line
        continue
      }
      if (!line || !current || commitDates.byPath.has(line)) continue
      commitDates.byPath.set(line, current)
    }

    commitDates.root = root
  } catch {
    commitDates.byPath.clear()
  }

  return commitDates
}

function sourceMs(target) {
  const dates = loadCommitDates()
  const relativePath = path
    .relative(dates.root, target)
    .split(path.sep)
    .join('/')
  const committed = dates.byPath.get(relativePath)

  if (committed) return new Date(committed).getTime()
  if (fs.existsSync(target) && fs.statSync(target).isFile()) {
    return fs.statSync(target).mtimeMs
  }

  return null
}

function latestSourceMs(target, skipDirectory) {
  if (!fs.existsSync(target)) return null

  const stat = fs.statSync(target)
  if (!stat.isDirectory()) return sourceMs(target)

  let latest = null

  for (const entry of fs.readdirSync(target, { withFileTypes: true })) {
    const child = path.join(target, entry.name)
    const childMs = entry.isDirectory()
      ? skipDirectory?.(entry.name, child)
        ? null
        : latestSourceMs(child, skipDirectory)
      : sourceMs(child)

    if (childMs == null) continue
    latest = latest == null ? childMs : Math.max(latest, childMs)
  }

  return latest
}

function newest(times) {
  const present = times.filter((value) => value != null)
  return present.length ? Math.max(...present) : Date.now()
}

function toLastmod(mtime) {
  return new Date(mtime).toISOString()
}

function isRouteDirectory(directory) {
  return ['page.tsx', 'page.ts', 'page.jsx', 'page.js'].some((name) =>
    fs.existsSync(path.join(directory, name)),
  )
}

function productSourceMs(productId) {
  return latestSourceMs(path.join(PRODUCTS_ROOT, productId), (name) => {
    return name === 'instructions'
  })
}

function catalogSourceMs() {
  const times = [sourceMs(path.join(PRODUCTS_ROOT, 'index.ts'))]

  for (const productId of publishedProductIds()) {
    times.push(productSourceMs(productId))
  }

  times.push(
    latestSourceMs(path.join(APP_DIR, 'products'), (_name, child) =>
      isRouteDirectory(child),
    ),
  )

  return newest(times)
}

function routeLastmod(route) {
  if (route === '/products') return toLastmod(catalogSourceMs())

  if (route === '/') {
    const times = ['page.tsx', 'page.module.scss'].map((name) =>
      sourceMs(path.join(APP_DIR, name)),
    )
    times.push(latestSourceMs(path.join(APP_DIR, '_components')))
    return toLastmod(newest(times))
  }

  const directory = path.join(APP_DIR, ...route.split('/').filter(Boolean))
  return toLastmod(
    newest([
      latestSourceMs(directory, (_name, child) => isRouteDirectory(child)),
    ]),
  )
}

function publishedProductIds() {
  const source = fs.readFileSync(path.join(PRODUCTS_ROOT, 'index.ts'), 'utf8')
  const productsBlock = source.slice(source.indexOf('export const PRODUCTS'))
  const ids = []
  const importPattern =
    /import\s+\{\s*([A-Z0-9_]+)\s*\}\s+from\s+'\.\/([^']+)'/g

  for (const match of source.matchAll(importPattern)) {
    const [, localName, folder] = match
    if (!productsBlock.includes(`[${localName}.id]`)) continue
    if (!INSTRUCTION_SLUG_PATTERN.test(folder)) continue
    ids.push(folder)
  }

  return ids
}

function articlePaths() {
  const paths = []

  for (const productId of publishedProductIds()) {
    const directory = path.join(PRODUCTS_ROOT, productId, 'instructions')
    if (!fs.existsSync(directory)) continue

    for (const fileName of fs.readdirSync(directory)) {
      if (!fileName.endsWith('.mdx')) continue

      const slug = fileName.slice(0, -'.mdx'.length)
      if (!INSTRUCTION_SLUG_PATTERN.test(slug)) continue

      const filePath = path.join(directory, fileName)

      paths.push({
        loc:
          slug === MAIN_INSTRUCTION_SLUG
            ? `/products/${productId}/instructions`
            : `/products/${productId}/instructions/${slug}`,
        changefreq: 'monthly',
        priority: 0.6,
        lastmod: toLastmod(sourceMs(filePath)),
      })
    }
  }

  return paths.sort((a, b) => a.loc.localeCompare(b.loc))
}

module.exports = {
  siteUrl: 'https://rentime.ru',
  generateRobotsTxt: true,
  sitemapSize: 5000,

  transform: async (config, route) => {
    if (
      route.match(/\.(png|jpe?g|webp|svg|gif)$/i) ||
      route.endsWith('.json') ||
      route.endsWith('.ico')
    ) {
      return null
    }

    let priority = 0.7
    let changefreq = 'monthly'

    if (route === '/') {
      priority = 1.0
      changefreq = 'weekly'
    }

    if (
      route.startsWith('/contacts') ||
      route.startsWith('/payment-and-delivery') ||
      route.startsWith('/lease-terms')
    ) {
      priority = 0.5
    }

    return {
      loc: route,
      changefreq,
      priority,
      lastmod: routeLastmod(route),
    }
  },

  additionalPaths: async () => {
    const extraPaths = []
    const sitemapFileMs = sourceMs(path.join(__dirname, 'products.sitemap.json'))

    extraPaths.push({
      loc: '/products',
      changefreq: 'weekly',
      priority: 0.99,
      lastmod: toLastmod(catalogSourceMs()),
    })

    PRODUCTS.forEach((product) => {
      extraPaths.push({
        loc: `/products/${product.id}`,
        changefreq: product.changefreq || 'monthly',
        priority: product.priority ?? 0.7,
        lastmod: toLastmod(productSourceMs(product.id) ?? sitemapFileMs),
      })
    })

    extraPaths.push(...articlePaths())

    return extraPaths
  },

  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
}
