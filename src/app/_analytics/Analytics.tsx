'use client'

import Script from 'next/script'
import { Suspense, useEffect, useState } from 'react'
import YandexMetrikaHit from '../_components/YandexMetrikaHit'
import {
  COOKIE_CONSENT_ACCEPTED_EVENT,
  COOKIE_CONSENT_DECLINED_EVENT,
  hasCookieConsent,
} from '@/shared/constants/cookieConsent'

const isProd = process.env.NODE_ENV === 'production'
const YM_ID = process.env.NEXT_PUBLIC_YM_ID

export default function Analytics() {
  const [hasConsent, setHasConsent] = useState(false)

  useEffect(() => {
    if (!isProd || !YM_ID) return

    if (hasCookieConsent()) {
      setHasConsent(true)
    }

    const onAccepted = () => setHasConsent(true)
    const onDeclined = () => setHasConsent(false)
    window.addEventListener(COOKIE_CONSENT_ACCEPTED_EVENT, onAccepted)
    window.addEventListener(COOKIE_CONSENT_DECLINED_EVENT, onDeclined)

    return () => {
      window.removeEventListener(COOKIE_CONSENT_ACCEPTED_EVENT, onAccepted)
      window.removeEventListener(COOKIE_CONSENT_DECLINED_EVENT, onDeclined)
    }
  }, [])

  if (!isProd || !YM_ID || !hasConsent) return null

  return (
    <>
      <Script id="ym-init" strategy="afterInteractive">
        {`
          (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {
              if (document.scripts[j].src === r) { return; }
            }
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
          })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=${YM_ID}', 'ym');

          ym(${YM_ID}, 'init', {
            ssr: true,
            webvisor: true,
            clickmap: true,
            ecommerce: 'dataLayer',
            accurateTrackBounce: true,
            trackLinks: true
          });
        `}
      </Script>

      <Suspense fallback={null}>
        <YandexMetrikaHit />
      </Suspense>
    </>
  )
}
