import { ReactNode } from 'react'
import styles from './mdxComponents.module.scss'

type InstructionAnchorProps = {
  id: string
  children?: ReactNode
  className?: string
}

function classNames(...parts: Array<string | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export function InstructionAnchor({
  id,
  children,
  className,
}: InstructionAnchorProps) {
  return (
    <span id={id} className={classNames(styles.anchor, className)}>
      {children}
    </span>
  )
}
