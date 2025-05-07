import { MainContentContainer, RentButton } from '@/shared/components'
import { PageHeader } from '@/widgets'
import styles from './page.module.scss'

function ProductPage() {
  return (
    <main>
      <PageHeader
        title="PlayStation 5"
        info={{
          text: 'Мощная игровая консоль нового поколения с невероятной графикой, быстрой загрузкой и полным погружением в игровой процесс',
          button: <RentButton />,
        }}
        className={styles.pageHeader}
      />

      <MainContentContainer></MainContentContainer>
    </main>
  )
}

export default ProductPage
