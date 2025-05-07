import { MainContentContainer } from '@/shared/components'
import { ThinPageHeader } from '@/widgets'
import styles from './page.module.scss'
import { Catalog } from './_components'

function ProductsPage() {
  return (
    <main>
      <ThinPageHeader
        title="Каталог товаров"
        info={{ text: 'Арендуйте — пользуйтесь — возвращайте!' }}
        className={styles.pageHeader}
      />

      <MainContentContainer>
        <Catalog />
      </MainContentContainer>
    </main>
  )
}

export default ProductsPage
