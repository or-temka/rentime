import type { Metadata, Viewport } from 'next'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import './globals.scss'
import { Footer, Header } from '@/shared/components'
import styles from './layout.module.scss'
import Analytics from './_analytics/Analytics'

export const viewport: Viewport = {
  themeColor: '#0b0b0bf2',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://rentime.ru'),
  title: 'Rentime | аренда вещей в Ярославле',
  description:
    'Арендуйте игровые приставки, инструменты и другие вещи в Ярославле с Rentime. Удобно, быстро и выгодно!',
  keywords: [
    'аренда Ярославль',
    'аренда в Ярославле',
    'прокат Ярославль',
    'аренда игровых приставок Ярославль',
    'прокат игровой приставки Ярославль',
    'аренда инструментов Ярославль',
    'Rentime аренда',
    'аренда техники Ярославль',
    'рентайм',
    'аренда предметов',
    'аренда вещей',
    'арендовать вещь',
    'аренда вещей недорого',
    'аренда',
  ],
  authors: [{ name: 'Rentime', url: 'https://rentime.ru' }],
  openGraph: {
    title: 'Rentime — Аренда вещей в Ярославле',
    description:
      'Арендуйте игровые приставки, инструменты и другие вещи в Ярославле с Rentime. Удобно, быстро и выгодно!',
    url: 'https://rentime.ru',
    siteName: 'Rentime',
    images: [
      {
        url: '/opengraph-image.webp',
        width: 1200,
        height: 630,
        alt: 'Rentime — Аренда вещей в Ярославле',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <head>
        <meta name="apple-mobile-web-app-title" content="Rentime" />
      </head>
      <body>
        <div className="global-background">
          <Analytics />

          <Header />
          <main className={styles.main}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
