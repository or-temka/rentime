import { ThinPageHeader } from '@/widgets'
import styles from './page.module.scss'
import { MainContentContainer } from '@/shared/components'
import { PaymentAndDelivery } from './_components'

export const metadata = {
  title: 'Оплата и доставка | Rentime — аренда в Ярославле',
  description:
    'Узнайте всё об оплате и доставке при аренде товаров на Rentime: доступные способы оплаты, условия доставки и самовывоза в Ярославле.',
  keywords: [
    'оплата аренды Ярославль',
    'доставка Rentime',
    'условия доставки аренда',
    'самовывоз аренда Ярославль',
    'как оплатить аренду',
    'способы оплаты Rentime',
    'аренда с доставкой Ярославль',
    'доставка игровых приставок Ярославль',
  ],
  openGraph: {
    title: 'Оплата и доставка — Rentime в Ярославле',
    description:
      'Информация об оплате и доставке при аренде: удобные способы оплаты, сроки и стоимость доставки по Ярославлю.',
    url: 'https://rentime.ru/payment-and-delivery',
    siteName: 'Rentime',
    images: [
      {
        url: 'https://rentime.ru/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Оплата и доставка — Rentime Ярославль',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
}

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
