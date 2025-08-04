import { AttentionBlock, ThinPageHeader } from '@/widgets'
import styles from './page.module.scss'
import { MainContentContainer } from '@/shared/components'
import { ContactButtons, OnMap } from './_components'
import { BLOCKS_IDS } from './constants'

export const metadata = {
  title: 'Контакты | Rentime — аренда в Ярославле',
  description:
    'Свяжитесь с командой Rentime для аренды товаров в Ярославле. Телефон, адрес, соцсети — мы всегда на связи!',
  keywords: [
    'контакты Rentime',
    'связаться Rentime',
    'аренда Ярославль телефон',
    'прокат Ярославль контакты',
    'аренда техники Ярославль',
    'саппорт Rentime',
    'аренда Ярославль адрес',
    'аренда Ярославль на карте',
    'аренда Ярославль контакты',
    'аренда вещей Ярославль',
  ],
  openGraph: {
    title: 'Контакты Rentime — аренда товаров в Ярославле',
    description:
      'Телефон, адрес и способы связи с сервисом аренды Rentime в Ярославле. Ответим на все вопросы!',
    url: 'https://rentime.ru/contacts',
    siteName: 'Rentime',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Контакты Rentime — Аренда вещей в Ярославле',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
}

function ContactsPage() {
  return (
    <main>
      <ThinPageHeader
        title={{ content: 'Контакты' }}
        className={styles.pageHeader}
      />

      <MainContentContainer id={BLOCKS_IDS.main}>
        <ContactButtons />
        <AttentionBlock text="Обязательно уточняйте наличие оборудования перед арендой!" />
        <OnMap />
      </MainContentContainer>
    </main>
  )
}

export default ContactsPage
