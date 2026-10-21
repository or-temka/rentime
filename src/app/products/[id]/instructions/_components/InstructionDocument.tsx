import { ROUTES } from '@/config/routes'
import { PRODUCTS } from '@/entities/product'
import { getInstruction } from '@/entities/product/instructions'
import { MainContentContainer } from '@/shared/components'
import { CommonThinPageHeader } from '@/widgets/CommonThinPageHeader'
import { Metadata } from 'next'
import { compileMDX } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import { InstructionCopySource } from './InstructionCopySource'
import {
  INSTRUCTION_ARTICLE_ID,
  INSTRUCTION_PAGE_ID,
  InstructionReadingAids,
} from './InstructionReadingAids'
import { createMdxComponents } from './mdxComponents'
import styles from './instructionDocument.module.scss'

type InstructionFrontmatter = {
  title?: string
  description?: string
}

async function loadInstruction(productId: string, slug: string) {
  const product = Object.hasOwn(PRODUCTS, productId)
    ? PRODUCTS[productId]
    : null
  const instruction = product ? getInstruction(productId, slug) : null
  if (!product || !instruction) return null

  const compiled = await compileMDX<InstructionFrontmatter>({
    source: instruction.source,
    options: { parseFrontmatter: true, blockJS: true },
    components: createMdxComponents(productId),
  })

  const title =
    compiled.frontmatter.title || `Инструкция — ${product.name.short}`
  const description =
    compiled.frontmatter.description ||
    `Инструкция по аренде ${product.name.cases.genitive} в Ярославле.`

  return { product, title, description, content: compiled.content }
}

export async function instructionMetadata(
  productId: string,
  slug: string,
): Promise<Metadata> {
  const loaded = await loadInstruction(productId, slug)

  if (!loaded) {
    return { title: 'Инструкция не найдена | Rentime' }
  }

  return {
    title: `${loaded.title} | Rentime`,
    description: loaded.description,
    openGraph: {
      title: `${loaded.title} | Rentime`,
      description: loaded.description,
      url: `https://rentime.ru${ROUTES.PRODUCTS.INSTRUCTION(productId, slug)}`,
      siteName: 'Rentime',
      locale: 'ru_RU',
      type: 'article',
    },
  }
}

export async function InstructionDocument({
  productId,
  slug,
}: {
  productId: string
  slug: string
}) {
  const loaded = await loadInstruction(productId, slug)
  if (!loaded) notFound()

  return (
    <div id={INSTRUCTION_PAGE_ID}>
      <CommonThinPageHeader title={{ content: loaded.title }} />
      <InstructionCopySource />
      <InstructionReadingAids />
      <div className={styles.sheet}>
        <MainContentContainer>
          <article id={INSTRUCTION_ARTICLE_ID} className={styles.article}>
            {loaded.content}
          </article>
        </MainContentContainer>
      </div>
    </div>
  )
}
