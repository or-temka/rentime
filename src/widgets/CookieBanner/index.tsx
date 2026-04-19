'use client'

import CookieConsent from 'react-cookie-consent'
import Link from 'next/link'
import { ROUTES } from '@/config/routes'
import styles from './index.module.scss'

const POLICY_VERSION = '19-04-2026'

export const CookieBanner = () => {
  return (
    <CookieConsent
      cookieName={`rentime_consent_v${POLICY_VERSION}`}
      buttonText="Принять"
      location="bottom"
      expires={365}
      containerClasses={styles['cookie-banner-container']}
      buttonClasses={styles['cookie-banner-button']}
      declineButtonClasses={styles['cookie-banner-decline']}
      contentClasses={styles['cookie-banner-content']}
      disableStyles={false}
    >
      <span>
        Мы используем файлы cookie для работы сервиса. Продолжая использовать
        сайт, вы соглашаетесь с нашей{' '}
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
