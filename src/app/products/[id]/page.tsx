import { MainContentContainer, RentButton } from '@/shared/components'
import { PageHeader } from '@/widgets'
import styles from './page.module.scss'
import { ProductPageProps } from './types'
import NotFound from '@/app/not-found'
import {
  Advertisement,
  InstanceOfGames,
  ProductInformation,
} from './_components'
import { Metadata } from 'next'
import { PRODUCTS } from '@/entities/product'

async function getProduct(id: string) {
  return PRODUCTS[id] ?? null
}

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  const product = await getProduct(params.id)

  if (!product) {
    return {
      title: 'Товар не найден | Rentime',
    }
  }

  return {
    title: `${product.name} — аренда в Ярославле | Rentime`,
    description:
      product.description ||
      `Арендуйте ${product.name} в Ярославле на выгодных условиях. Rentime — удобно и быстро!`,
    keywords: [
      product.name,
      `аренда ${product.name}`,
      `${product.name} Ярославль`,
      'прокат Ярославль',
      'аренда Rentime',
      `арендовать ${product.name}`,
    ],
    openGraph: {
      title: `${product.name} — аренда в Ярославле | Rentime`,
      description:
        product.description ||
        `Выгодная аренда ${product.name} в Ярославле. Rentime — сервис проката нужных вещей.`,
      url: `https://rentime.ru/products/${product.id}`,
      siteName: 'Rentime',
      images: [
        {
          url: product.imagesURL.thumbnail || 'https://rentime.ru/',
          width: 1200,
          height: 630,
          alt: `${product.name} — аренда в Ярославле | Rentime`,
        },
      ],
      locale: 'ru_RU',
      type: 'website',
    },
    metadataBase: new URL('https://rentime.ru'),
  }
}

async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.id)

  if (!product) {
    return <NotFound />
  }

  return (
    <main>
      <PageHeader
        title={product.name}
        info={{
          text: product.description || '',
          button: (
            <a href={product.links?.avito} target="_blank">
              <RentButton href="" />
            </a>
          ),
        }}
        className={styles.pageHeader}
        style={{ backgroundImage: `url(${product.imagesURL.full})` }}
      />

      <MainContentContainer>
        <ProductInformation product={product} />

        {product.games?.available && (
          <InstanceOfGames
            games={product.games.available}
            downloaded={product.games.downloaded}
          />
        )}

        <Advertisement product={product} />
      </MainContentContainer>
    </main>
  )
}

export default ProductPage
