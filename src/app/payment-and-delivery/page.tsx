import { ThinPageHeader } from '@/widgets'
import styles from './page.module.scss'
import { MainContentContainer } from '@/shared/components'

function PaymentAndDeliveryPage() {
  return (
    <div>
      <ThinPageHeader title="Оплата и доставка" className={styles.pageHeader} />

      <MainContentContainer>Контент</MainContentContainer>
    </div>
  )
}

export default PaymentAndDeliveryPage
