import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.scss'

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Rentime | аренда вещей в Ярославле',
  description:
    'Арендуйте игровые приставки, инструменты и другие вещи в Ярославле с Rentime. Удобно, быстро и выгодно!',
  keywords: [
    'аренда Ярославль',
    'прокат Ярославль',
    'аренда игровых приставок Ярославль',
    'прокат игровой приставки Ярославль',
    'аренда инструментов Ярославль',
    'Rentime аренда',
    'рентайм',
    'аренда вещей недорого',
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
        url: 'https://rentime.ru/og-image.jpg', // TODO: замнить на реальное изображение
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
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${montserrat.variable}`}>{children}</body>
    </html>
  )
}
