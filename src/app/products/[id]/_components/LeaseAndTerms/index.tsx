import { LeaseAndTermsProps } from './types'
import { RentRules } from '@/app/lease-terms/_components'
import styles from './index.module.scss'

export const LeaseAndTerms = ({ product }: LeaseAndTermsProps) => {
  return (
    <div className={styles.container}>
      <RentRules />
      {product.leaseAndTerms}
    </div>
  )
}
