export type QueryRecords = Record<string, string | number | boolean | undefined>

export const withQuery = <T extends QueryRecords>(
  path: string,
  query?: T,
  hash?: string
): string => {
  const searchParams = new URLSearchParams()

  if (query) {
    for (const key in query) {
      const value = query[key]
      if (value !== undefined) {
        searchParams.append(key, String(value))
      }
    }
  }

  const queryString = searchParams.toString()
  const hashString = hash ? `#${hash}` : ''

  return `${path}${queryString ? `?${queryString}` : ''}${hashString}`
}
