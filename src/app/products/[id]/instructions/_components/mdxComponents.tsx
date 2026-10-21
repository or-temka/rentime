import { resolveInstructionHref } from '@/entities/product/instructions'
import Link from 'next/link'
import {
  Children,
  ComponentProps,
  CSSProperties,
  isValidElement,
  ReactNode,
} from 'react'
import { InstructionImage } from './InstructionImage'
import styles from './mdxComponents.module.scss'

type MdxTagProps<Tag extends keyof React.JSX.IntrinsicElements> =
  React.JSX.IntrinsicElements[Tag]

function classNames(...parts: Array<string | undefined>) {
  return parts.filter(Boolean).join(' ')
}

function textOf(node: ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(textOf).join('')
  if (isValidElement<{ children?: ReactNode }>(node)) {
    return textOf(node.props.children)
  }
  return ''
}

function slugify(value: string) {
  const slug = value
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '')
  return slug || 'section'
}

function InstructionMdxImage({ alt, src }: MdxTagProps<'img'>) {
  return (
    <InstructionImage
      src={typeof src === 'string' ? src : undefined}
      alt={alt || ''}
    />
  )
}

function isLoneInstructionImage(children: ReactNode) {
  const nodes = Children.toArray(children).filter(
    (node) => !(typeof node === 'string' && node.trim() === ''),
  )

  return (
    nodes.length === 1 &&
    isValidElement(nodes[0]) &&
    nodes[0].type === InstructionMdxImage
  )
}

function createHeadingIdFactory() {
  const used = new Set<string>()

  return (explicitId: string | undefined, children: ReactNode) => {
    const base = explicitId || slugify(textOf(children))
    let id = base
    let suffix = 2
    while (used.has(id)) {
      id = `${base}-${suffix}`
      suffix += 1
    }
    used.add(id)
    return id
  }
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
  const headingId = createHeadingIdFactory()

  return {
    h1: ({ className, ...props }: MdxTagProps<'h1'>) => (
      <h1 className={classNames(styles.h1, className)} {...props} />
    ),
    h2: ({
      className,
      id,
      children,
      tabIndex,
      ...props
    }: MdxTagProps<'h2'>) => (
      <h2
        {...props}
        id={headingId(id, children)}
        tabIndex={tabIndex ?? -1}
        className={classNames(styles.h2, className)}
      >
        {children}
      </h2>
    ),
    h3: ({
      className,
      id,
      children,
      tabIndex,
      ...props
    }: MdxTagProps<'h3'>) => (
      <h3
        {...props}
        id={headingId(id, children)}
        tabIndex={tabIndex ?? -1}
        className={classNames(styles.h3, className)}
      >
        {children}
      </h3>
    ),
    p: ({ className, children, ...props }: MdxTagProps<'p'>) =>
      isLoneInstructionImage(children) ? (
        children
      ) : (
        <p className={classNames(styles.paragraph, className)} {...props}>
          {children}
        </p>
      ),
    ul: ({ className, ...props }: MdxTagProps<'ul'>) => (
      <ul className={classNames(styles.ul, className)} {...props} />
    ),
    ol: ({ className, start, style, ...props }: MdxTagProps<'ol'>) => (
      <ol
        {...props}
        start={start}
        className={classNames(styles.ol, className)}
        style={
          {
            ...style,
            '--list-start': Number(start ?? 1) - 1,
          } as CSSProperties
        }
      />
    ),
    li: ({ className, children, ...props }: MdxTagProps<'li'>) => (
      <li className={classNames(styles.li, className)} {...props}>
        <span className={styles.itemBody}>{children}</span>
      </li>
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
    img: InstructionMdxImage,
  }
}
