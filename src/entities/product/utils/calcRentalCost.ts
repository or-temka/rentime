import { Product } from '../types'

export function calcRentalCost(
  product: Product,
  weekdayCount: number,
  weekendCount: number,
): number {
  const { weekdays, weekends } = product.price
  const totalDays = weekdayCount + weekendCount

  // Получаем отсортированный массив всех дней-тарифов
  const availableDays = Array.from(
    new Set([...Object.keys(weekdays), ...Object.keys(weekends)]),
  )
    .map(Number)
    .sort((a, b) => a - b)

  let targetIndex = -1

  // Находим индекс текущего тарифного дня
  for (let i = 0; i < availableDays.length; i++) {
    if (availableDays[i] <= totalDays) {
      targetIndex = i
    } else {
      break
    }
  }

  if (targetIndex === -1) return 0

  // Считаем текущую стоимость
  const currentDay = availableDays[targetIndex]
  const currentKey = String(currentDay) as keyof typeof weekdays
  const weekdayPrice = weekdays[currentKey] || 0
  const weekendPrice = weekends[currentKey] || 0

  let currentCost = weekdayPrice * weekdayCount + weekendPrice * weekendCount

  // Проверяем ТОЛЬКО следующий тарифный день
  const nextIndex = targetIndex + 1
  if (nextIndex < availableDays.length) {
    const nextDay = availableDays[nextIndex]
    const nextKey = String(nextDay) as keyof typeof weekdays
    const pW = weekdays[nextKey] || 0
    const pE = weekends[nextKey] || 0

    if (pW > 0 && pE > 0) {
      const extraDays = nextDay - totalDays

      // Стоимость при переходе на следующий тариф (с добором минимальных дней)
      const costAtNextTier =
        pW * weekdayCount + pE * weekendCount + extraDays * Math.min(pW, pE)

      // Если следующий тариф целиком выходит дешевле — берем его цену
      if (costAtNextTier < currentCost) {
        currentCost = costAtNextTier
      }
    }
  }

  return Math.round(currentCost)
}
