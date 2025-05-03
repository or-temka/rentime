import { ThinPageHeader } from '@/widgets'
import styles from './page.module.scss'
import { MainContentContainer } from '@/shared/components'
import { PaymentAndDelivery } from './_components'

function PaymentAndDeliveryPage() {
  return (
    <main>
      <ThinPageHeader title="Оплата и доставка" className={styles.pageHeader} />

      <MainContentContainer>
        <PaymentAndDelivery />
      </MainContentContainer>
    </main>
  )
}

export default PaymentAndDeliveryPage
