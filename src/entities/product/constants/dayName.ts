import { dayKey } from '../types'

export const DAY_NAMES: Record<dayKey, { simple: string; fromDays: string }> = {
  '1': { simple: '1 день', fromDays: 'от 1 дня' },
  '2': { simple: '2 дня', fromDays: 'от 2 дней' },
  '3': { simple: '3 дня', fromDays: 'от 3 дней' },
  '4': { simple: '4 дня', fromDays: 'от 4 дней' },
  '5': { simple: '5 дней', fromDays: 'от 5 дней' },
  '6': { simple: '6 дней', fromDays: 'от 6 дней' },
  '7': { simple: '7 дней', fromDays: 'от 7 дней' },
  '10': { simple: '10 дней', fromDays: 'от 10 дней' },
  '14': { simple: '14 дней', fromDays: 'от 14 дней' },
  '30': { simple: '1 месяц', fromDays: 'от 1 месяца' },
  '60': { simple: '2 месяца', fromDays: 'от 2 месяцев' },
}
