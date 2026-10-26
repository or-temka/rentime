'use client'

import { useEffect } from 'react'
import { INSTRUCTION_ARTICLE_ID } from './InstructionReadingAids'

function selectionInside(article: HTMLElement, selection: Selection) {
  const { anchorNode, focusNode } = selection
  return (
    anchorNode !== null &&
    focusNode !== null &&
    article.contains(anchorNode) &&
    article.contains(focusNode)
  )
}

function copiedHtml(selection: Selection, source: string) {
  const container = document.createElement('div')
  for (let index = 0; index < selection.rangeCount; index += 1) {
    container.append(selection.getRangeAt(index).cloneContents())
  }

  const paragraph = document.createElement('p')
  paragraph.textContent = source
  container.append(paragraph)
  return container.innerHTML
}

export function InstructionCopySource() {
  useEffect(() => {
    const onCopy = (event: ClipboardEvent) => {
      const article = document.getElementById(INSTRUCTION_ARTICLE_ID)
      const selection = window.getSelection()
      const clipboard = event.clipboardData
      if (!article || !selection || !clipboard) return
      if (selection.isCollapsed || selection.rangeCount === 0) return
      if (!selectionInside(article, selection)) return

      const text = selection.toString().replace(/(?:\r?\n)+$/, '')
      if (!text.trim()) return

      const source = `Информация с сайта: rentime.ru${window.location.pathname}`
      clipboard.setData('text/plain', `${text}\n\n${source}`)
      clipboard.setData('text/html', copiedHtml(selection, source))
      event.preventDefault()
    }

    document.addEventListener('copy', onCopy)
    return () => document.removeEventListener('copy', onCopy)
  }, [])

  return null
}
