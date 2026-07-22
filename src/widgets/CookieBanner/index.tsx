'use client'

import CookieConsent from 'react-cookie-consent'
import Link from 'next/link'
import { ROUTES } from '@/config/routes'
import {
  COOKIE_CONSENT_ACCEPTED_EVENT,
  COOKIE_CONSENT_NAME,
} from '@/shared/constants/cookieConsent'
import styles from './index.module.scss'

export const CookieBanner = () => {
  return (
    <CookieConsent
      cookieName={COOKIE_CONSENT_NAME}
      buttonText="Принять"
      location="bottom"
      expires={365}
      containerClasses={styles['cookie-banner-container']}
      buttonClasses={styles['cookie-banner-button']}
      declineButtonClasses={styles['cookie-banner-decline']}
      contentClasses={styles['cookie-banner-content']}
      disableStyles={false}
      onAccept={() => {
        window.dispatchEvent(new Event(COOKIE_CONSENT_ACCEPTED_EVENT))
      }}
    >
      <span>
        Мы используем файлы cookie, в том числе для аналитики (Яндекс.Метрика) и
        рекламы (Яндекс.Директ). Нажимая «Принять», вы соглашаетесь на их
        использование в соответствии с{' '}
        <Link
          href={ROUTES.LEGAL.PRIVACY.BASE}
          className={styles['cookie-banner-link']}
        >
          Политикой конфиденциальности
        </Link>
        .
      </span>
    </CookieConsent>
  )
}
