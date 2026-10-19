import { resolveInstructionHref } from '@/entities/product/instructions'
import Link from 'next/link'
import { ComponentProps, ReactNode } from 'react'
import { InstructionImage } from './InstructionImage'
import styles from './mdxComponents.module.scss'

type MdxTagProps<Tag extends keyof React.JSX.IntrinsicElements> =
  React.JSX.IntrinsicElements[Tag]

function classNames(...parts: Array<string | undefined>) {
  return parts.filter(Boolean).join(' ')
}

function InstructionLink({
  productId,
  href,
  children,
  className,
  ...rest
}: ComponentProps<'a'> & { productId: string }) {
  const resolvedHref = resolveInstructionHref(productId, href)
  const classNameValue = classNames(styles.link, className)
  const isExternal = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(resolvedHref)

  if (isExternal) {
    return (
      <a
        {...rest}
        href={resolvedHref}
        className={classNameValue}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={resolvedHref} className={classNameValue}>
      {children}
    </Link>
  )
}

export function createMdxComponents(productId: string) {
  return {
    h1: ({ className, ...props }: MdxTagProps<'h1'>) => (
      <h1 className={classNames(styles.h1, className)} {...props} />
    ),
    h2: ({ className, ...props }: MdxTagProps<'h2'>) => (
      <h2 className={classNames(styles.h2, className)} {...props} />
    ),
    h3: ({ className, ...props }: MdxTagProps<'h3'>) => (
      <h3 className={classNames(styles.h3, className)} {...props} />
    ),
    p: ({ className, ...props }: MdxTagProps<'p'>) => (
      <p className={classNames(styles.paragraph, className)} {...props} />
    ),
    ul: ({ className, ...props }: MdxTagProps<'ul'>) => (
      <ul className={classNames(styles.ul, className)} {...props} />
    ),
    ol: ({ className, ...props }: MdxTagProps<'ol'>) => (
      <ol className={classNames(styles.ol, className)} {...props} />
    ),
    li: ({ className, ...props }: MdxTagProps<'li'>) => (
      <li className={classNames(styles.li, className)} {...props} />
    ),
    a: ({ href, children, className }: MdxTagProps<'a'>) => (
      <InstructionLink
        productId={productId}
        href={href}
        className={className}
      >
        {children as ReactNode}
      </InstructionLink>
    ),
    strong: ({ className, ...props }: MdxTagProps<'strong'>) => (
      <strong className={classNames(styles.strong, className)} {...props} />
    ),
    em: ({ className, ...props }: MdxTagProps<'em'>) => (
      <em className={classNames(styles.em, className)} {...props} />
    ),
    blockquote: ({ className, ...props }: MdxTagProps<'blockquote'>) => (
      <blockquote
        className={classNames(styles.blockquote, className)}
        {...props}
      />
    ),
    code: ({ className, ...props }: MdxTagProps<'code'>) => (
      <code className={classNames(styles.code, className)} {...props} />
    ),
    pre: ({ className, ...props }: MdxTagProps<'pre'>) => (
      <pre className={classNames(styles.pre, className)} {...props} />
    ),
    hr: () => <hr className={styles.hr} />,
    img: ({ alt, src }: MdxTagProps<'img'>) => (
      <InstructionImage
        src={typeof src === 'string' ? src : undefined}
        alt={alt || ''}
      />
    ),
  }
}
