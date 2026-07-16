import { Product } from "@/entities/product"

export interface CalcCostProps {
  isOpen: boolean
  onClose: () => void
  product: Product
}