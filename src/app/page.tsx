import { PageHeader } from '@/widgets'
import { HowItWork, PopularProducts, ProductStand } from './_components'
import styles from './page.module.scss'
import { MainContentContainer, RentButton } from '@/shared/components'

export const metadata = {
  title: 'Аренда вещей в Ярославле | Rentime',
  description:
    'Арендуйте игровые приставки, инструменты и другие вещи в Ярославле с Rentime. Удобно, быстро и выгодно!',
  keywords: [
    'аренда Ярославль',
    'прокат Ярославль',
    'аренда игровых приставок Ярославль',
    'прокат игровой приставки Ярославль',
    'аренда инструментов Ярославль',
    'Rentime аренда',
    'рентайм',
    'аренда вещей недорого',
    'аренда',
  ],
  openGraph: {
    title: 'Аренда товаров в Ярославле — Rentime',
    description:
      'Арендуйте игровые приставки, инструменты и другие вещи в Ярославле с Rentime. Удобно, быстро и выгодно!',
    url: 'https://rentime.ru',
    siteName: 'Rentime',
    images: [
      {
        url: 'https://rentime.ru/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rentime — Аренда вещей в Ярославле',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
}

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
