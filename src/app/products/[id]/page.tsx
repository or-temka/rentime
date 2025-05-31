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
import { PRODUCTS } from '@/entities/product'

function ProductPage({ params }: ProductPageProps) {
  const queryProductId = params.id
  const product = PRODUCTS[queryProductId]

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
