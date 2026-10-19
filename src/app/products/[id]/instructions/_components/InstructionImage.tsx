'use client'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './instructionImage.module.scss'

type InstructionImageProps = {
  src?: string
  alt?: string
}

const MOBILE_LIGHTBOX = '(max-width: 834px)'

type LightboxFrame = {
  width: number
  height: number
}

export function InstructionImage({ src, alt = '' }: InstructionImageProps) {
  const [open, setOpen] = useState(false)
  const [frame, setFrame] = useState<LightboxFrame | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  const fit = () => {
    const image = imageRef.current
    const overlay = overlayRef.current
    if (!image?.naturalWidth || !overlay) return

    const computed = getComputedStyle(overlay)
    const maxWidth =
      overlay.clientWidth -
      parseFloat(computed.paddingLeft) -
      parseFloat(computed.paddingRight)
    const maxHeight =
      overlay.clientHeight -
      parseFloat(computed.paddingTop) -
      parseFloat(computed.paddingBottom)
    if (maxWidth <= 0 || maxHeight <= 0) return

    const mobile = window.matchMedia(MOBILE_LIGHTBOX).matches
    const width = mobile
      ? maxWidth
      : Math.floor(
          image.naturalWidth *
            Math.min(
              maxWidth / image.naturalWidth,
              maxHeight / image.naturalHeight,
            ),
        )

    const height = Math.round((image.naturalHeight * width) / image.naturalWidth)

    setFrame({
      width: Math.floor(width),
      height: mobile ? height : Math.min(height, Math.floor(maxHeight)),
    })
  }

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
    const frameId = requestAnimationFrame(fit)
    window.addEventListener('resize', fit)

    return () => {
      body.style.overflow = originalBodyOverflow
      html.style.overflow = originalHtmlOverflow
      body.style.paddingRight = originalPaddingRight
      document.removeEventListener('keydown', onKeyDown)
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', fit)
      triggerRef.current?.focus()
      setFrame(null)
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
            ref={overlayRef}
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
              ref={imageRef}
              className={styles.full}
              src={src}
              alt={alt}
              width={frame?.width}
              height={frame?.height}
              style={
                frame
                  ? {
                      width: frame.width,
                      height: frame.height,
                      maxWidth: 'none',
                    }
                  : { position: 'absolute', visibility: 'hidden' }
              }
              onLoad={fit}
              onClick={(event) => event.stopPropagation()}
            />
          </div>,
          document.body,
        )}
    </>
  )
}
