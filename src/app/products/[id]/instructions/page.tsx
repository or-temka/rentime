import {
  hasMainInstruction,
  MAIN_INSTRUCTION_SLUG,
} from '@/entities/product/instructions'
import { PRODUCTS } from '@/entities/product'
import {
  InstructionDocument,
  instructionMetadata,
} from './_components/InstructionDocument'

interface InstructionPageProps {
  params: Promise<{ id: string }>
}

export function generateStaticParams() {
  return Object.keys(PRODUCTS)
    .filter((id) => hasMainInstruction(id))
    .map((id) => ({ id }))
}

export async function generateMetadata({ params }: InstructionPageProps) {
  const { id } = await params
  return instructionMetadata(id, MAIN_INSTRUCTION_SLUG)
}

export default async function InstructionPage({ params }: InstructionPageProps) {
  const { id } = await params
  return (
    <InstructionDocument productId={id} slug={MAIN_INSTRUCTION_SLUG} />
  )
}
