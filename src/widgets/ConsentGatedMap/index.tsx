'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ROUTES } from '@/config/routes'
import { Button } from '@/shared/components'
import {
  COOKIE_CONSENT_ACCEPTED_EVENT,
  COOKIE_CONSENT_DECLINED_EVENT,
  acceptCookieConsent,
  hasCookieConsent,
} from '@/shared/constants/cookieConsent'
import styles from './index.module.scss'

type ConsentGatedMapProps = {
  src: string
  className?: string
  title?: string
}

export const ConsentGatedMap = ({
  src,
  className,
  title = 'Яндекс.Карта',
}: ConsentGatedMapProps) => {
  const [hasConsent, setHasConsent] = useState(false)

  useEffect(() => {
    setHasConsent(hasCookieConsent())

    const onAccepted = () => setHasConsent(true)
    const onDeclined = () => setHasConsent(false)
    window.addEventListener(COOKIE_CONSENT_ACCEPTED_EVENT, onAccepted)
    window.addEventListener(COOKIE_CONSENT_DECLINED_EVENT, onDeclined)

    return () => {
      window.removeEventListener(COOKIE_CONSENT_ACCEPTED_EVENT, onAccepted)
      window.removeEventListener(COOKIE_CONSENT_DECLINED_EVENT, onDeclined)
    }
  }, [])

  if (hasConsent) {
    return (
      <iframe
        src={src}
        className={className}
        title={title}
        frameBorder={0}
      />
    )
  }

  return (
    <div className={[styles.placeholder, className].filter(Boolean).join(' ')}>
      <p className={styles.placeholder__text}>
        Чтобы показать карту (Яндекс.Карты), нужно согласие на использование
        cookie. Нажимая «Принять», вы также соглашаетесь на аналитику
        (Яндекс.Метрика) в соответствии с{' '}
        <Link href={ROUTES.LEGAL.PRIVACY.BASE} className={styles.placeholder__link}>
          Политикой конфиденциальности
        </Link>
        .
      </p>
      <Button type="button" theme="light" onClick={acceptCookieConsent}>
        Принять
      </Button>
    </div>
  )
}
