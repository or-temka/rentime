export const COOKIE_CONSENT_VERSION = '23-07-2026'

export const COOKIE_CONSENT_NAME = `rentime_consent_v${COOKIE_CONSENT_VERSION}`

export const COOKIE_CONSENT_ACCEPTED_EVENT = 'rentime:cookie-consent-accepted'

export function hasCookieConsent(): boolean {
  if (typeof document === 'undefined') return false

  return document.cookie
    .split(';')
    .some((part) => part.trim().startsWith(`${COOKIE_CONSENT_NAME}=`))
}
