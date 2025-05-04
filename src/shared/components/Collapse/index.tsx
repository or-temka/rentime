'use client'

import { useEffect, useRef, useState } from 'react'
import { CollapseProps } from './types'
import styles from './index.module.scss'
import { CrossSVG } from '../svgs'

export const Collapse = ({ title, children }: CollapseProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState('0px')
  const [svgRotate, setSvgRotate] = useState(0)

  useEffect(() => {
    setHeight(isOpen ? `${contentRef.current?.scrollHeight}px` : '0px')
    setSvgRotate(isOpen ? 45 : 0)
  }, [isOpen])

  return (
    <div className={styles.container}>
      <button className={styles.header} onClick={() => setIsOpen(!isOpen)}>
        {title}
        <CrossSVG
          className={styles.cross}
          style={{ transform: `rotate(${svgRotate}deg)` }}
        />
      </button>
      <div ref={contentRef} className={styles.content} style={{ height }}>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  )
}
