import { PageHeader } from '@/widgets'
import { HowItWork, PopularProducts, ProductStand } from './_components'
import styles from './page.module.scss'
import { MainContentContainer, RentButton } from '@/shared/components'

function Home() {
  return (
    <main>
      <PageHeader
        title={
          <>
            Аренда товаров <br /> в Ярославле
          </>
        }
        info={{
          text: 'Зачем покупать, если можно арендовать?',
          button: <RentButton />,
        }}
        className={styles.pageHeader}
      />

      <MainContentContainer>
        <PopularProducts />
        <ProductStand />
        <HowItWork />
      </MainContentContainer>
    </main>
  )
}

export default Home
