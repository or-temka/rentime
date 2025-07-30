/** @type {import('next-sitemap').IConfig} */
// eslint-disable-next-line @typescript-eslint/no-require-imports
const PRODUCTS = require('./products.sitemap.json')

module.exports = {
  siteUrl: 'https://rentime.ru',
  generateRobotsTxt: true,
  sitemapSize: 5000,

  transform: async (config, path) => {
    if (
      path.match(/\.(png|jpe?g|webp|svg|gif)$/i) ||
      path.endsWith('.json') ||
      path.endsWith('.ico')
    ) {
      return null
    }

    let priority = 0.7
    let changefreq = 'monthly'

    if (path === '/') {
      priority = 1.0
      changefreq = 'weekly'
    }

    if (
      path.startsWith('/contacts') ||
      path.startsWith('/payment-and-delivery') ||
      path.startsWith('/lease-terms')
    ) {
      priority = 0.5
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    }
  },

  additionalPaths: async () => {
    const extraPaths = []

    extraPaths.push({
      loc: '/products',
      changefreq: 'weekly',
      priority: 0.99,
      lastmod: new Date().toISOString(),
    })

    PRODUCTS.forEach((product) => {
      extraPaths.push({
        loc: `/products/${product.id}`,
        changefreq: product.changefreq || 'monthly',
        priority: product.priority ?? 0.7,
        lastmod: new Date().toISOString(),
      })
    })

    return extraPaths
  },

  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
}
