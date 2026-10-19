'use client'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './instructionImage.module.scss'

type InstructionImageProps = {
  src?: string
  alt?: string
}

export function InstructionImage({ src, alt = '' }: InstructionImageProps) {
  const [open, setOpen] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    const { body, documentElement: html } = document
    const originalBodyOverflow = body.style.overflow
    const originalHtmlOverflow = html.style.overflow
    const originalPaddingRight = body.style.paddingRight
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth

    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`
    html.style.overflow = 'hidden'
    body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      event.stopPropagation()
      setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      body.style.overflow = originalBodyOverflow
      html.style.overflow = originalHtmlOverflow
      body.style.paddingRight = originalPaddingRight
      document.removeEventListener('keydown', onKeyDown)
      triggerRef.current?.focus()
    }
  }, [open])

  if (!src) return null

  return (
    <>
      <figure className={styles.figure}>
        <button
          ref={triggerRef}
          type="button"
          className={styles.trigger}
          aria-label={alt ? undefined : 'Увеличить изображение'}
          onClick={() => setOpen(true)}
        >
          <img className={styles.image} src={src} alt={alt} />
        </button>
        {alt ? (
          <figcaption className={styles.caption} aria-hidden="true">
            {alt}
          </figcaption>
        ) : null}
      </figure>
      {open &&
        createPortal(
          <div
            className={styles.overlay}
            role="dialog"
            aria-modal="true"
            aria-label={alt || 'Изображение'}
            onClick={() => setOpen(false)}
          >
            <button
              ref={closeButtonRef}
              type="button"
              className={styles.close}
              aria-label="Закрыть"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
            <img
              className={styles.full}
              src={src}
              alt={alt}
              onClick={(event) => event.stopPropagation()}
            />
          </div>,
          document.body,
        )}
    </>
  )
}
