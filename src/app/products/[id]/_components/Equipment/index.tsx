import { H2, UlLi } from '@/shared/components'
import { EquipmentProps } from './types'
import styles from './index.module.scss'

export const Equipment = ({ product }: EquipmentProps) => {
  if (!product.equipment) {
    return (
      <div className={styles.empty}>
        <span className={styles.empty__text}>
          В комплекте с данным товаром ничего не идёт.
        </span>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <H2 className={styles.title}>В комплекте</H2>

      <ul className={styles.list}>
        {product.equipment.map((equipItem, index) => (
          <UlLi key={index} className={styles.list__item}>
            {equipItem}
          </UlLi>
        ))}
      </ul>
    </div>
  )
}
