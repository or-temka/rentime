import { ROUTES } from '@/config/routes'
import { PRODUCTS } from '@/entities/product'
import {
  listInstructionSlugs,
  MAIN_INSTRUCTION_SLUG,
} from '@/entities/product/instructions'
import { notFound, redirect } from 'next/navigation'
import {
  InstructionDocument,
  instructionMetadata,
} from '../_components/InstructionDocument'

interface NamedInstructionPageProps {
  params: Promise<{ id: string; slug: string }>
}

export function generateStaticParams() {
  return Object.keys(PRODUCTS).flatMap((id) =>
    listInstructionSlugs(id)
      .filter((slug) => slug !== MAIN_INSTRUCTION_SLUG)
      .map((slug) => ({ id, slug })),
  )
}

export async function generateMetadata({ params }: NamedInstructionPageProps) {
  const { id, slug } = await params
  if (slug === MAIN_INSTRUCTION_SLUG) {
    return instructionMetadata(id, MAIN_INSTRUCTION_SLUG)
  }
  return instructionMetadata(id, slug)
}

export default async function NamedInstructionPage({
  params,
}: NamedInstructionPageProps) {
  const { id, slug } = await params

  if (!Object.hasOwn(PRODUCTS, id)) notFound()

  if (slug === MAIN_INSTRUCTION_SLUG) {
    redirect(ROUTES.PRODUCTS.INSTRUCTION(id))
  }

  return <InstructionDocument productId={id} slug={slug} />
}
