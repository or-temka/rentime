import { ROUTES } from '@/config/routes'
import { INSTRUCTION_SLUG_PATTERN, MAIN_INSTRUCTION_SLUG } from './constants'

const EXTERNAL_HREF = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i

export function resolveInstructionHref(productId: string, href?: string) {
  if (!href) return '#'

  const trimmed = href.trim()
  if (
    trimmed.startsWith('#') ||
    trimmed.startsWith('/') ||
    EXTERNAL_HREF.test(trimmed)
  ) {
    return trimmed
  }

  const hashIndex = trimmed.indexOf('#')
  const hash = hashIndex >= 0 ? trimmed.slice(hashIndex) : ''
  const slug = (hashIndex >= 0 ? trimmed.slice(0, hashIndex) : trimmed)
    .replace(/^\.\//, '')
    .replace(/\.mdx$/, '')

  if (slug === '' || slug === MAIN_INSTRUCTION_SLUG) {
    return `${ROUTES.PRODUCTS.INSTRUCTION(productId)}${hash}`
  }

  if (!INSTRUCTION_SLUG_PATTERN.test(slug)) return trimmed

  return `${ROUTES.PRODUCTS.INSTRUCTION(productId, slug)}${hash}`
}
