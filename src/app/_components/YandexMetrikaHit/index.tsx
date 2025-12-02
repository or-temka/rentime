'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

const YM_ID = Number(process.env.NEXT_PUBLIC_YM_ID)

export default function YandexMetrikaHit() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window === 'undefined') return
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ym = (window as any).ym
    if (typeof ym !== 'function') return

    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : '')
    ym(YM_ID, 'hit', url)
  }, [pathname, searchParams])

  return null
}
