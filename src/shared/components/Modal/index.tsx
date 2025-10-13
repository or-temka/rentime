'use client'

import React, { useCallback, useEffect, useId, useMemo, useRef } from 'react'
import styles from './index.module.scss'
import { ModalProps } from './types'

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([type="hidden"]):not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',')

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  sheetOnMobile = true,
  classNames = {},
}: ModalProps) => {
  const overlayRef = useRef<HTMLDivElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const closeBtnRef = useRef<HTMLButtonElement | null>(null)
  const prevActiveRef = useRef<HTMLElement | null>(null)
  const shouldCloseRef = useRef(false)
  const titleId = useId()

  useEffect(() => {
    if (!isOpen) return
    const { body, documentElement: html } = document
    const originalBodyOverflow = body.style.overflow
    const originalHtmlOverflow = html.style.overflow
    const originalPaddingRight = body.style.paddingRight

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`

    html.style.overflow = 'hidden'
    body.style.overflow = 'hidden'

    return () => {
      body.style.overflow = originalBodyOverflow
      html.style.overflow = originalHtmlOverflow
      body.style.paddingRight = originalPaddingRight
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    prevActiveRef.current = document.activeElement as HTMLElement | null
    ;(closeBtnRef.current ?? contentRef.current)?.focus?.()
    return () => prevActiveRef.current?.focus?.()
  }, [isOpen])

  const onCloseHandler = useCallback(
    (e?: { stopPropagation?: () => void }) => {
      e?.stopPropagation?.()
      onClose()
    },
    [onClose]
  )

  const onOverlayMouseDown = useCallback((e: React.MouseEvent) => {
    const root = contentRef.current
    shouldCloseRef.current = !!root && !root.contains(e.target as Node)
  }, [])

  const onOverlayMouseUp = useCallback(
    (e: React.MouseEvent) => {
      const root = contentRef.current
      const isOutside = !!root && !root.contains(e.target as Node)
      if (shouldCloseRef.current && isOutside) onClose()
      shouldCloseRef.current = false
    },
    [onClose]
  )

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation()
        onClose()
        return
      }

      if (e.key === 'Tab') {
        const container = contentRef.current
        if (!container) return
        const focusables = Array.from(
          container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
        ).filter(
          (el) => el.offsetParent !== null || el === document.activeElement
        )

        if (focusables.length === 0) {
          e.preventDefault()
          container.focus()
          return
        }

        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        const current = document.activeElement as HTMLElement

        if (!e.shiftKey && current === last) {
          e.preventDefault()
          first.focus()
        } else if (e.shiftKey && current === first) {
          e.preventDefault()
          last.focus()
        }
      }
    },
    [onClose]
  )

  const contentClass = useMemo(
    () =>
      [
        styles.content,
        styles[size],
        sheetOnMobile ? styles.sheetOnMobile : '',
        classNames.content || '',
      ]
        .filter(Boolean)
        .join(' '),
    [size, sheetOnMobile, classNames.content]
  )

  if (!isOpen) return null

  return (
    <div
      ref={overlayRef}
      className={[styles.overlay, classNames.overlay || '']
        .filter(Boolean)
        .join(' ')}
      aria-hidden={false}
      onMouseDown={onOverlayMouseDown}
      onMouseUp={onOverlayMouseUp}
    >
      <div
        className={[styles.wrapper, classNames.wrapper || '']
          .filter(Boolean)
          .join(' ')}
        onKeyDown={onKeyDown}
        onMouseDown={onOverlayMouseDown}
        onMouseUp={onOverlayMouseUp}
      >
        <div
          ref={contentRef}
          className={contentClass}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? titleId : undefined}
          tabIndex={-1}
          onClick={(e) => e.stopPropagation()} // можно оставить
        >
          {title && (
            <div className={[styles.header, classNames.header || ''].join(' ')}>
              <h2
                id={titleId}
                className={[styles.title, classNames.title || ''].join(' ')}
              >
                {title}
              </h2>
              <button
                ref={closeBtnRef}
                type="button"
                aria-label="Закрыть модальное окно"
                className={[styles.closeBtn, classNames.closeBtn || ''].join(
                  ' '
                )}
                onClick={onCloseHandler}
              >
                ✕
              </button>
            </div>
          )}

          <div className={[styles.body, classNames.body || ''].join(' ')}>
            {children}
          </div>

          {/* <div className={[styles.footer, classNames.footer || ''].join(' ')}>
            <button type="button" onClick={onCloseHandler}>Закрыть</button>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export { Modal }
