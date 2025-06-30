import { MainContentContainer } from '@/shared/components'
import { ThinPageHeader } from '@/widgets'
import styles from './page.module.scss'
import { Catalog } from './_components'
import { ProductsPageProps } from './types'

export const metadata = {
  title: 'Каталог товаров | Rentime — аренда в Ярославле',
  description:
    'Выбирайте товары для аренды в Ярославле: игровые приставки, VR-очки, инструменты и многое другое. Удобный каталог с актуальными предложениями от Rentime.',
  keywords: [
    'каталог аренды Ярославль',
    'аренда товаров Ярославль',
    'аренда каталог',
    'аренда техники Ярославль',
    'аренда приставок Ярославль',
    'прокат электроники Ярославль',
    'каталог Rentime',
    'аренда для отдыха Ярославль',
    'аренда досуга Ярославль',
    'аренда приставки Ярославль',
    'аренда VR Ярославль',
    'развлечения в аренду',
    'техника в аренду Ярославль',
    'аренда инструментов Ярославль',
    'аренда бытовой техники',
    'туризм Ярославль аренда',
    'походное снаряжение прокат',
  ],
  openGraph: {
    title: 'Каталог товаров — аренда в Ярославле | Rentime',
    description:
      'Актуальный каталог товаров для аренды: от игровых приставок до инструментов. Rentime — просто арендуй!',
    url: 'https://rentime.ru',
    siteName: 'Rentime',
    images: [
      {
        url: 'https://rentime.ru/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Каталог товаров — Rentime Ярославль',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
}

async function ProductsPage({ searchParams }: ProductsPageProps) {
  const { productCategory } = await searchParams

  return (
    <main>
      <ThinPageHeader
        title="Каталог товаров"
        info={{ text: 'Арендуйте — пользуйтесь — возвращайте!' }}
        className={styles.pageHeader}
      />

      <MainContentContainer>
        <Catalog activeCategory={productCategory} />
      </MainContentContainer>
    </main>
  )
}

export default ProductsPage
