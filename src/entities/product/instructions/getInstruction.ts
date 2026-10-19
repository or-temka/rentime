import fs from 'fs'
import path from 'path'
import { PRODUCTS } from '../constants'
import {
  INSTRUCTION_SLUG_PATTERN,
  MAIN_INSTRUCTION_SLUG,
} from './constants'

export type InstructionSource = {
  source: string
  slug: string
}

const instructionsRoot = path.join(
  process.cwd(),
  'src/entities/product/constants/products',
)

function instructionsDirectory(productId: string) {
  return path.resolve(instructionsRoot, productId, 'instructions')
}

function instructionFilePath(productId: string, slug: string) {
  if (!Object.hasOwn(PRODUCTS, productId)) return null
  if (!INSTRUCTION_SLUG_PATTERN.test(productId)) return null
  if (!INSTRUCTION_SLUG_PATTERN.test(slug)) return null

  const directory = instructionsDirectory(productId)
  const filePath = path.resolve(directory, `${slug}.mdx`)
  const relativePath = path.relative(directory, filePath)

  if (relativePath.startsWith('..') || path.isAbsolute(relativePath)) {
    return null
  }

  return filePath
}

export function getInstruction(
  productId: string,
  slug = MAIN_INSTRUCTION_SLUG,
): InstructionSource | null {
  const filePath = instructionFilePath(productId, slug)
  if (!filePath || !fs.existsSync(filePath)) return null

  return {
    source: fs.readFileSync(filePath, 'utf8'),
    slug,
  }
}

export function hasMainInstruction(productId: string) {
  const filePath = instructionFilePath(productId, MAIN_INSTRUCTION_SLUG)
  return Boolean(filePath && fs.existsSync(filePath))
}

export function listInstructionSlugs(productId: string) {
  if (!Object.hasOwn(PRODUCTS, productId)) return []

  const directory = instructionsDirectory(productId)
  if (!fs.existsSync(directory)) return []

  return fs
    .readdirSync(directory)
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => fileName.slice(0, -'.mdx'.length))
    .filter((slug) => INSTRUCTION_SLUG_PATTERN.test(slug))
}
