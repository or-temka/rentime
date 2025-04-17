import { PageHeader, PopularProducts } from './_components'
import styles from './page.module.scss'

function Home() {
  return (
    <main className={styles.main}>
      <PageHeader />

      <div className={styles.mainContent}>
        <PopularProducts />
      </div>
    </main>
  )
}

export default Home
