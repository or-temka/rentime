import { Product } from '../types'

export function getMinRentalDay(product: Product) {
  const { weekdays, weekends } = product.price

  const allDays = Array.from(
    new Set([...Object.keys(weekdays), ...Object.keys(weekends)]),
  ).sort((a, b) => Number(a) - Number(b))

  for (const day of allDays) {
    const key = day as keyof typeof weekdays

    if ((weekdays[key] || 0) > 0 && (weekends[key] || 0) > 0) {
      return Number(day)
    }
  }

  return 1
}
