import { H2 } from '@/shared/components'
import { EquipmentProps } from './types'

export const Equipment = ({ product }: EquipmentProps) => {
  if (!product.equipment) {
    return (
      <div>
        <span>В комплекте с данным товаром ничего не идёт.</span>
      </div>
    )
  }

  return (
    <div>
      <H2>В комплекте</H2>

      <ul>
        {product.equipment.map((equipItem, index) => (
          <li key={index}>{equipItem}</li>
        ))}
      </ul>
    </div>
  )
}
