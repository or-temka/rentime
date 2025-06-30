export type QueryRecords = Record<string, string | number | boolean | undefined>

export const withQuery = <T extends QueryRecords>(
  path: string,
  query?: T
): string => {
  if (!query) return path

  const searchParams = new URLSearchParams()
  for (const key in query) {
    const value = query[key]
    if (value !== undefined) {
      searchParams.append(key, String(value))
    }
  }

  return `${path}?${searchParams.toString()}`
}
