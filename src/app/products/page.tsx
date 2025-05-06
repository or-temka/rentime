import { MainContentContainer } from '@/shared/components'
import { ThinPageHeader } from '@/widgets'
import styles from './page.module.scss'

function ProductsPage() {
  return (
    <main>
      <ThinPageHeader
        title="Каталог товаров"
        info={{ text: 'Арендуйте — пользуйтесь — возвращайте!' }}
        className={styles.pageHeader}
      />

      <MainContentContainer></MainContentContainer>
    </main>
  )
}

export default ProductsPage
