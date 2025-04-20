import {
  HowItWork,
  PageHeader,
  PopularProducts,
  ProductStand,
} from './_components'
import styles from './page.module.scss'

function Home() {
  return (
    <main className={styles.main}>
      <PageHeader />

      <div className={styles.mainContent}>
        <PopularProducts />
        <ProductStand />
        <HowItWork />
      </div>
    </main>
  )
}

export default Home
