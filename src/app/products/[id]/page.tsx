import { MainContentContainer, RentButton } from '@/shared/components'
import { PageHeader } from '@/widgets'
import styles from './page.module.scss'
import NotFound from '@/app/not-found'
import {
  Advertisement,
  InstanceOfGames,
  ProductInformation,
} from './_components'
import { Metadata } from 'next'
import { PRODUCTS } from '@/entities/product'

interface ProductPageProps {
  params: Promise<{ id: string }>
}

async function getProduct(id: string) {
  return PRODUCTS[id] ?? null
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params
  const product = await getProduct(id)

  if (!product) {
    return {
      title: 'Товар не найден | Rentime',
    }
  }

  return {
    title: `${product.name.base} — аренда в Ярославле | Rentime`,
    description:
      product.description ||
      `Арендуйте ${product.name.cases.instrumental} в Ярославле на выгодных условиях. Rentime — удобно и быстро!`,
    keywords: [
      product.name.base,
      `аренда ${product.name.cases.dative}`,
      `${product.name.base} Ярославль`,
      `аренда ${product.name.base} Ярославль`,
      `взять ${product.name.cases.instrumental} в аренду`,
      `взять ${product.name.cases.instrumental} в прокат`,
      `арендовать ${product.name.cases.instrumental}`,
      ...(product.keywords || []),
    ],
    openGraph: {
      title: `${product.name.base} — аренда в Ярославле | Rentime`,
      description:
        product.description ||
        `Выгодная аренда ${product.name.cases.dative} в Ярославле. Rentime — сервис проката нужных вещей.`,
      url: `https://rentime.ru/products/${product.id}`,
      siteName: 'Rentime',
      images: [
        {
          url: product.imagesURL.thumbnail || '/opengraph-image.webp',
          width: 1200,
          height: 630,
          alt: `${product.name.base} — аренда в Ярославле | Rentime`,
        },
      ],
      locale: 'ru_RU',
      type: 'website',
    },
    metadataBase: new URL('https://rentime.ru'),
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = await getProduct(id)

  if (!product) {
    return <NotFound />
  }

  return (
    <main>
      <PageHeader
        title={{ content: product.name.short, metaText: product.name.base }}
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
