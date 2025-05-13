import { MainContentContainer, RentButton } from '@/shared/components'
import { PageHeader } from '@/widgets'
import styles from './page.module.scss'
import { ProductPageProps } from './types'
import { PRODUCTS } from '@/entities/product'
import NotFound from '@/app/not-found'
import { ProductInformation } from './_components'

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
          button: <RentButton />,
        }}
        className={styles.pageHeader}
        style={{ backgroundImage: `url(${product.imagesURL.full})` }}
      />

      <MainContentContainer>
        <ProductInformation product={product} />
      </MainContentContainer>
    </main>
  )
}

export default ProductPage
