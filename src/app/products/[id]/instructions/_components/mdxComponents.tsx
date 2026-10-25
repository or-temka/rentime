import {
  Children,
  CSSProperties,
  isValidElement,
  ReactNode,
} from 'react'
import { InstructionAnchor } from './InstructionAnchor'
import { InstructionImage } from './InstructionImage'
import { InstructionLink } from './InstructionLink'
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

function createIdFactory() {
  const used = new Set<string>()

  return (explicitId: string | undefined, fallback: string) => {
    const base = explicitId || slugify(fallback)
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

const INSTRUCTION_IMAGE_MARKER = '__instructionImage'

function InstructionMdxImage({
  alt,
  src,
  id,
}: MdxTagProps<'img'> & { id?: string }) {
  return (
    <InstructionImage
      src={typeof src === 'string' ? src : undefined}
      alt={alt || ''}
      id={id}
    />
  )
}

Object.assign(InstructionMdxImage, { [INSTRUCTION_IMAGE_MARKER]: true })

function isInstructionImageNode(node: ReactNode) {
  if (!isValidElement(node)) return false
  const type = node.type as { [INSTRUCTION_IMAGE_MARKER]?: boolean }
  return Boolean(type[INSTRUCTION_IMAGE_MARKER])
}

/** MDX puts consecutive images without a blank line into one <p>. */
function isOnlyInstructionImages(children: ReactNode) {
  const nodes = Children.toArray(children).filter(
    (node) => !(typeof node === 'string' && node.trim() === ''),
  )

  return nodes.length > 0 && nodes.every(isInstructionImageNode)
}

export function createMdxComponents(productId: string) {
  const nextId = createIdFactory()

  function ImageWithId({ alt, src, id, ...rest }: MdxTagProps<'img'>) {
    const resolvedId = nextId(
      typeof id === 'string' ? id : undefined,
      alt || 'image',
    )
    return (
      <InstructionMdxImage {...rest} alt={alt} src={src} id={resolvedId} />
    )
  }

  Object.assign(ImageWithId, { [INSTRUCTION_IMAGE_MARKER]: true })

  return {
    Anchor: ({
      id,
      children,
      className,
    }: {
      id: string
      children?: ReactNode
      className?: string
    }) => (
      <InstructionAnchor id={id} className={className}>
        {children}
      </InstructionAnchor>
    ),
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
        id={nextId(id, textOf(children))}
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
        id={nextId(id, textOf(children))}
        tabIndex={tabIndex ?? -1}
        className={classNames(styles.h3, className)}
      >
        {children}
      </h3>
    ),
    p: ({ className, children, ...props }: MdxTagProps<'p'>) =>
      isOnlyInstructionImages(children) ? (
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
        className={classNames(styles.link, className)}
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
    img: ImageWithId,
  }
}
