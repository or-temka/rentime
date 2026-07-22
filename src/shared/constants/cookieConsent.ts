export const COOKIE_CONSENT_VERSION =
  process.env.NEXT_PUBLIC_COOKIE_CONSENT_VERSION ?? ''

export const COOKIE_CONSENT_VERSION_DISPLAY = COOKIE_CONSENT_VERSION.replaceAll(
  '-',
  '.',
)

export const COOKIE_CONSENT_NAME = `rentime_consent_v${COOKIE_CONSENT_VERSION}`

export const COOKIE_CONSENT_ACCEPTED_VALUE = 'true'

export const COOKIE_CONSENT_DECLINED_VALUE = 'false'

export const COOKIE_CONSENT_EXPIRES_DAYS = 365

export const COOKIE_CONSENT_ACCEPTED_EVENT = 'rentime:cookie-consent-accepted'

export const COOKIE_CONSENT_DECLINED_EVENT = 'rentime:cookie-consent-declined'

export function getCookieConsentValue(): string | null {
  if (typeof document === 'undefined') return null

  const prefix = `${COOKIE_CONSENT_NAME}=`
  const match = document.cookie
    .split(';')
    .map((part) => part.trim())
    .find((part) => part.startsWith(prefix))

  if (!match) return null

  return decodeURIComponent(match.slice(prefix.length))
}

export function hasCookieConsent(): boolean {
  return getCookieConsentValue() === COOKIE_CONSENT_ACCEPTED_VALUE
}

function setConsentCookie(value: string): void {
  const expires = new Date()
  expires.setDate(expires.getDate() + COOKIE_CONSENT_EXPIRES_DAYS)

  document.cookie = `${COOKIE_CONSENT_NAME}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`
}

export function acceptCookieConsent(): void {
  if (typeof document === 'undefined') return

  setConsentCookie(COOKIE_CONSENT_ACCEPTED_VALUE)
  window.dispatchEvent(new Event(COOKIE_CONSENT_ACCEPTED_EVENT))
}

export function declineCookieConsent(): void {
  if (typeof document === 'undefined') return

  setConsentCookie(COOKIE_CONSENT_DECLINED_VALUE)
  window.dispatchEvent(new Event(COOKIE_CONSENT_DECLINED_EVENT))
}
