'use client'

import { useEffect, useState } from 'react'
import CookieConsent from 'react-cookie-consent'
import Link from 'next/link'
import { ROUTES } from '@/config/routes'
import {
  COOKIE_CONSENT_ACCEPTED_EVENT,
  COOKIE_CONSENT_ACCEPTED_VALUE,
  COOKIE_CONSENT_DECLINED_EVENT,
  COOKIE_CONSENT_DECLINED_VALUE,
  COOKIE_CONSENT_EXPIRES_DAYS,
  COOKIE_CONSENT_NAME,
} from '@/shared/constants/cookieConsent'
import styles from './index.module.scss'

export const CookieBanner = () => {
  const [visible, setVisible] = useState<'show' | 'hidden' | 'byCookieValue'>(
    'byCookieValue',
  )

  useEffect(() => {
    const hide = () => setVisible('hidden')
    window.addEventListener(COOKIE_CONSENT_ACCEPTED_EVENT, hide)
    window.addEventListener(COOKIE_CONSENT_DECLINED_EVENT, hide)

    return () => {
      window.removeEventListener(COOKIE_CONSENT_ACCEPTED_EVENT, hide)
      window.removeEventListener(COOKIE_CONSENT_DECLINED_EVENT, hide)
    }
  }, [])

  return (
    <CookieConsent
      cookieName={COOKIE_CONSENT_NAME}
      cookieValue={COOKIE_CONSENT_ACCEPTED_VALUE}
      declineCookieValue={COOKIE_CONSENT_DECLINED_VALUE}
      buttonText="Принять"
      declineButtonText="Отклонить"
      enableDeclineButton
      location="bottom"
      expires={COOKIE_CONSENT_EXPIRES_DAYS}
      visible={visible}
      containerClasses={styles['cookie-banner-container']}
      buttonClasses={styles['cookie-banner-button']}
      declineButtonClasses={styles['cookie-banner-decline']}
      contentClasses={styles['cookie-banner-content']}
      disableStyles={false}
      onAccept={() => {
        window.dispatchEvent(new Event(COOKIE_CONSENT_ACCEPTED_EVENT))
      }}
      onDecline={() => {
        window.dispatchEvent(new Event(COOKIE_CONSENT_DECLINED_EVENT))
      }}
    >
      <span>
        Мы используем файлы cookie, в том числе для аналитики (Яндекс.Метрика) и
        отображения карт (Яндекс.Карты). Нажимая «Принять», вы соглашаетесь на
        их использование в соответствии с{' '}
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
