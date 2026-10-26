'use client'

import { resolveInstructionHref } from '@/entities/product/instructions/resolveInstructionHref'
import Link from 'next/link'
import { ComponentProps, MouseEvent, ReactNode } from 'react'
import {
  isModifiedClick,
  navigateInstructionHash,
  sameDocumentHashId,
} from './instructionHashNav'

type InstructionLinkProps = {
  productId: string
  href?: string
  children?: ReactNode
  className?: string
} & Omit<ComponentProps<'a'>, 'href' | 'children' | 'className'>

export function InstructionLink({
  productId,
  href,
  children,
  className,
  ...rest
}: InstructionLinkProps) {
  const resolvedHref = resolveInstructionHref(productId, href)
  const isExternal = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(resolvedHref)

  if (isExternal) {
    return (
      <a
        {...rest}
        href={resolvedHref}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  }

  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (isModifiedClick(event)) return

    const hashId = sameDocumentHashId(resolvedHref)
    if (!hashId) return

    if (!navigateInstructionHash(hashId)) return
    event.preventDefault()
  }

  return (
    <Link href={resolvedHref} className={className} onClick={onClick}>
      {children}
    </Link>
  )
}
