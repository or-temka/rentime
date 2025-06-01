import { MainContentContainer } from '@/shared/components'
import styles from './page.module.scss'
import { ThinPageHeader } from '@/widgets'
import { LeaseAgreement, RentRules } from './_components'

export const metadata = {
  title: 'Условия аренды | Rentime — аренда в Ярославле',
  description:
    'Ознакомьтесь с правилами и условиями аренды товаров на Rentime: сроки, оплата, ответственность, возврат и многое другое.',
  keywords: [
    'условия аренды Rentime',
    'правила проката Ярославль',
    'договор аренды Ярославль',
    'аренда товаров условия',
    'возврат аренда Ярославль',
    'ответственность арендатора',
    'оплата аренды Rentime',
    'срок аренды товаров',
  ],
  openGraph: {
    title: 'Условия аренды — Rentime в Ярославле',
    description:
      'Все важные условия аренды: правила пользования, оплата, возврат, продление и ответственность арендатора.',
    url: 'https://rentime.ru/lease-terms',
    siteName: 'Rentime',
    images: [
      {
        url: 'https://rentime.ru/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Условия аренды — Rentime Ярославль',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
}

function LeaseTermsPage() {
  return (
    <main>
      <ThinPageHeader title="Условия аренды" className={styles.pageHeader} />

      <MainContentContainer>
        <RentRules />
        <LeaseAgreement />
      </MainContentContainer>
    </main>
  )
}

export default LeaseTermsPage
