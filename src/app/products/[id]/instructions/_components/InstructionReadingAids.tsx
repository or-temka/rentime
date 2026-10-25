'use client'

import { CSSProperties, MouseEvent, useEffect, useRef, useState } from 'react'
import {
  applyInstructionHashFromLocation,
  instructionScrollBehavior,
  isModifiedClick,
  navigateInstructionHash,
} from './instructionHashNav'
import styles from './instructionReadingAids.module.scss'

export const INSTRUCTION_ARTICLE_ID = 'instruction-article'
export const INSTRUCTION_PAGE_ID = 'instruction-page'

const ACTIVE_LINE = 96
const TOC_MAX_WIDTH = 380
const TOC_VIEWPORT_GAP = 140
const RAIL_MEDIA = '(min-width: 1024px) and (hover: hover) and (pointer: fine)'

let classicScrollbarWidth: number | null = null

function scrollbarWidth() {
  if (classicScrollbarWidth !== null) return classicScrollbarWidth
  const probe = document.createElement('div')
  probe.style.cssText =
    'position:absolute;top:-9999px;width:100px;height:100px;overflow:scroll;visibility:hidden;'
  document.body.appendChild(probe)
  classicScrollbarWidth = probe.offsetWidth - probe.clientWidth
  probe.remove()
  return classicScrollbarWidth
}

type Heading = {
  id: string
  text: string
  level: 2 | 3
}

function tocCap() {
  return Math.min(TOC_MAX_WIDTH, window.innerWidth - TOC_VIEWPORT_GAP)
}

export function InstructionReadingAids() {
  const listRef = useRef<HTMLOListElement>(null)
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string | null>(null)
  const [openWidth, setOpenWidth] = useState(120)
  const [pastHeader, setPastHeader] = useState(false)

  useEffect(() => {
    const page = document.getElementById(INSTRUCTION_PAGE_ID)
    const header = page?.querySelector('header')
    if (!header) return

    const observer = new IntersectionObserver(([entry]) => {
      setPastHeader(!entry.isIntersecting)
    })
    observer.observe(header)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const article = document.getElementById(INSTRUCTION_ARTICLE_ID)
    if (!article) return

    const next: Heading[] = []
    article.querySelectorAll('h2, h3').forEach((node) => {
      if (!(node instanceof HTMLElement) || !node.id) return
      const text = node.textContent?.replace(/\s+/g, ' ').trim()
      if (!text) return
      next.push({
        id: node.id,
        text,
        level: node.tagName === 'H3' ? 3 : 2,
      })
    })
    setHeadings(next)
  }, [])

  useEffect(() => {
    const run = () => {
      requestAnimationFrame(() => {
        applyInstructionHashFromLocation()
      })
    }

    run()
    window.addEventListener('hashchange', run)
    window.addEventListener('popstate', run)
    return () => {
      window.removeEventListener('hashchange', run)
      window.removeEventListener('popstate', run)
    }
  }, [])

  useEffect(() => {
    const list = listRef.current
    if (!list) return

    let cancelled = false
    const media = window.matchMedia(RAIL_MEDIA)
    const measure = () => {
      if (cancelled) return
      const contentWidth = Math.ceil(list.getBoundingClientRect().width)
      const scrollbar =
        list.scrollHeight > window.innerHeight ? scrollbarWidth() : 0
      const needed = contentWidth + scrollbar
      setOpenWidth(Math.max(120, Math.min(needed, tocCap())))
    }
    const schedule = () => {
      requestAnimationFrame(measure)
    }

    schedule()
    document.fonts?.ready.then(schedule)
    window.addEventListener('resize', schedule)
    media.addEventListener('change', schedule)
    return () => {
      cancelled = true
      window.removeEventListener('resize', schedule)
      media.removeEventListener('change', schedule)
    }
  }, [headings])

  useEffect(() => {
    if (headings.length === 0) return

    let frame = 0

    const update = () => {
      const atBottom =
        window.scrollY > 0 &&
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 2
      let current: string | null = atBottom
        ? (headings[headings.length - 1]?.id ?? null)
        : null

      if (!atBottom) {
        for (const heading of headings) {
          const element = document.getElementById(heading.id)
          if (!element) continue
          if (element.getBoundingClientRect().top <= ACTIVE_LINE) {
            current = heading.id
          }
        }
      }

      setActiveId((previous) => (previous === current ? previous : current))
    }

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [headings])

  const scrollToHeading = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    if (isModifiedClick(event)) return
    if (!navigateInstructionHash(id)) return
    event.preventDefault()
  }

  return (
    <>
      <button
        type="button"
        className={
          pastHeader ? `${styles.toTop} ${styles.railVisible}` : styles.toTop
        }
        aria-label="Наверх"
        aria-hidden={pastHeader ? undefined : true}
        tabIndex={pastHeader ? undefined : -1}
        onClick={() =>
          window.scrollTo({ top: 0, behavior: instructionScrollBehavior() })
        }
      >
        <span className={styles.arrow} aria-hidden="true">
          <svg viewBox="0 0 24 24" width="32" height="32">
            <path
              d="M6 15l6-6 6 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      {headings.length > 0 && (
        <nav
          className={
            pastHeader ? `${styles.toc} ${styles.railVisible}` : styles.toc
          }
          aria-label="Содержание"
          aria-hidden={pastHeader ? undefined : true}
          style={
            { '--toc-open-width': `${openWidth}px` } as CSSProperties
          }
        >
          <ol ref={listRef} className={styles.list}>
            {headings.map((heading) => {
              const active = activeId === heading.id
              return (
                <li
                  key={heading.id}
                  className={
                    heading.level === 3 ? styles.itemNested : styles.item
                  }
                >
                  <a
                    href={`#${heading.id}`}
                    className={active ? styles.linkActive : styles.link}
                    aria-current={active ? 'location' : undefined}
                    onClick={(event) => scrollToHeading(event, heading.id)}
                  >
                    {heading.text}
                  </a>
                </li>
              )
            })}
          </ol>
        </nav>
      )}
    </>
  )
}
