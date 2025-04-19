export type ProductCardProps = {
  id: string
  imageURL: string
  name: string
  rating: number
  feedbackCount: number
  classNames?: {
    container?: string
    content?: string
  }
}
