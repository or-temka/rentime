export const INSTRUCTION_FLASH_ATTR = 'data-instruction-flash'

const FLASH_MS = 2000
const FLASH_REDUCED_MS = 400
const SCROLL_SETTLE_MS = 120
const SCROLL_MAX_WAIT_MS = 2500
/** After this, drop the hash so a later reload does not re-jump. */
const HASH_CLEAR_MS = 15_000

let flashTimer: ReturnType<typeof setTimeout> | null = null
let flashingElement: HTMLElement | null = null
let hashClearTimer: ReturnType<typeof setTimeout> | null = null
let navigationGeneration = 0

function scheduleHashClear(expectedHash: string) {
  if (hashClearTimer !== null) {
    clearTimeout(hashClearTimer)
    hashClearTimer = null
  }

  hashClearTimer = setTimeout(() => {
    hashClearTimer = null
    if (decodeLocationHash() !== expectedHash) return
    history.replaceState(
      history.state,
      '',
      `${window.location.pathname}${window.location.search}`,
    )
  }, HASH_CLEAR_MS)
}

export function instructionScrollBehavior(): ScrollBehavior {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ? 'auto'
    : 'smooth'
}

export function decodeLocationHash(): string {
  const raw = window.location.hash
  if (!raw) return ''
  try {
    return decodeURIComponent(raw)
  } catch {
    return raw
  }
}

export function hashIdFromLocation(): string | null {
  const hash = decodeLocationHash()
  if (!hash.startsWith('#') || hash.length < 2) return null
  return hash.slice(1)
}

export function flashInstructionTarget(element: HTMLElement) {
  if (flashingElement && flashingElement !== element) {
    flashingElement.removeAttribute(INSTRUCTION_FLASH_ATTR)
  }
  if (flashTimer !== null) {
    clearTimeout(flashTimer)
    flashTimer = null
  }

  element.removeAttribute(INSTRUCTION_FLASH_ATTR)
  // Force reflow so re-triggering the same target restarts the animation.
  void element.offsetWidth
  element.setAttribute(INSTRUCTION_FLASH_ATTR, '')
  flashingElement = element

  const duration = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ? FLASH_REDUCED_MS
    : FLASH_MS

  flashTimer = setTimeout(() => {
    element.removeAttribute(INSTRUCTION_FLASH_ATTR)
    if (flashingElement === element) flashingElement = null
    flashTimer = null
  }, duration)
}

function waitForScrollEnd(): Promise<void> {
  return new Promise((resolve) => {
    let settled: ReturnType<typeof setTimeout> | null = null
    let finished = false

    const done = () => {
      if (finished) return
      finished = true
      if (settled !== null) clearTimeout(settled)
      clearTimeout(maxWait)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('scrollend', onScrollEnd)
      resolve()
    }

    const onScrollEnd = () => done()

    const onScroll = () => {
      if (settled !== null) clearTimeout(settled)
      settled = setTimeout(done, SCROLL_SETTLE_MS)
    }

    const maxWait = setTimeout(done, SCROLL_MAX_WAIT_MS)

    window.addEventListener('scrollend', onScrollEnd, { once: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    // If already at the target, no scroll events fire — settle after a short delay.
    settled = setTimeout(done, SCROLL_SETTLE_MS)
  })
}

function isHeadingTarget(element: HTMLElement) {
  return element.tagName === 'H2' || element.tagName === 'H3'
}

function isTextAnchorTarget(element: HTMLElement) {
  return !isHeadingTarget(element) && element.tagName !== 'FIGURE'
}

export function scrollToInstructionTarget(id: string): HTMLElement | null {
  const element = document.getElementById(id)
  if (!element) return null

  // Only inline text anchors prefer the middle of the viewport.
  // Headings and images keep the previous top-aligned scroll.
  const block: ScrollLogicalPosition = isTextAnchorTarget(element)
    ? 'center'
    : 'start'

  element.scrollIntoView({
    behavior: instructionScrollBehavior(),
    block,
  })

  return element
}

async function scrollThenFlash(element: HTMLElement, generation: number) {
  // Headings are navigation landmarks only — no highlight flash.
  if (isHeadingTarget(element)) return

  if (instructionScrollBehavior() === 'auto') {
    if (generation !== navigationGeneration) return
    flashInstructionTarget(element)
    return
  }

  await waitForScrollEnd()
  if (generation !== navigationGeneration) return
  flashInstructionTarget(element)
}

export function navigateInstructionHash(id: string) {
  const element = scrollToInstructionTarget(id)
  if (!element) return false

  const generation = ++navigationGeneration
  void scrollThenFlash(element, generation)

  const nextHash = `#${id}`
  if (decodeLocationHash() !== nextHash) {
    // Replace, don't push — Back should leave the article, not step anchors.
    history.replaceState(history.state, '', nextHash)
  }
  scheduleHashClear(nextHash)

  return true
}

export function applyInstructionHashFromLocation() {
  const id = hashIdFromLocation()
  if (!id) return false
  const element = scrollToInstructionTarget(id)
  if (!element) return false
  const generation = ++navigationGeneration
  void scrollThenFlash(element, generation)
  scheduleHashClear(`#${id}`)
  return true
}

export function isModifiedClick(event: {
  metaKey: boolean
  ctrlKey: boolean
  shiftKey: boolean
  altKey: boolean
  button: number
}) {
  return (
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    event.button !== 0
  )
}

/** Same-document hash link: pathname matches and href has a hash. */
export function sameDocumentHashId(href: string): string | null {
  let url: URL
  try {
    url = new URL(href, window.location.href)
  } catch {
    return null
  }

  if (url.origin !== window.location.origin) return null
  if (url.pathname !== window.location.pathname) return null
  if (!url.hash || url.hash.length < 2) return null

  try {
    return decodeURIComponent(url.hash.slice(1))
  } catch {
    return url.hash.slice(1)
  }
}
