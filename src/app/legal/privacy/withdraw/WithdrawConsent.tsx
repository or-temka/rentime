'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ROUTES } from '@/config/routes'
import { revokeCookieConsent } from '@/shared/constants/cookieConsent'
import styles from './page.module.scss'

export function WithdrawConsent() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    revokeCookieConsent()
    setDone(true)
  }, [])

  if (!done) {
    return <p className={styles.status}>Очищаем файлы cookie…</p>
  }

  return (
    <div className={styles.message}>
      <h2 className={styles.title}>Согласие отозвано</h2>
      <p className={styles.text}>
        Файлы cookie этого сайта (включая согласие и данные аналитики
        Яндекс.Метрики, доступные браузеру) очищены. Согласие на их использование
        отозвано: аналитика и виджеты карт больше не будут подключаться, пока вы
        снова не нажмёте «Принять».
      </p>
      <p className={styles.text}>
        Cookie сторонних доменов (например, yandex.ru), если они были установлены,
        удалите в настройках браузера при необходимости.
      </p>
      <p className={styles.text}>
        <Link href={ROUTES.HOME} className={styles.link}>
          На главную
        </Link>
        {' · '}
        <Link href={ROUTES.LEGAL.PRIVACY.BASE} className={styles.link}>
          Политика конфиденциальности
        </Link>
      </p>
    </div>
  )
}
