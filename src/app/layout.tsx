import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.scss'
import { Footer, Header } from '@/shared/components'
import styles from './layout.module.scss'
import Analytics from './_analytics/Analytics'

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

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
      <body className={`${montserrat.variable}`}>
        <Analytics />

        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
