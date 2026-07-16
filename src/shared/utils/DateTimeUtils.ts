export interface DaysCount {
  total: number
  weekdays: number
  weekends: number
}

export default class DateTimeUtils {
  static formatDate(date: Date): string {
    return new Intl.DateTimeFormat('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).format(date)
  }

  static calcDaysCount(startDate: Date, endDate: Date): DaysCount {
    const start = new Date(
      startDate.getFullYear(),
      startDate.getMonth(),
      startDate.getDate(),
    )
    const end = new Date(
      endDate.getFullYear(),
      endDate.getMonth(),
      endDate.getDate(),
    )

    let weekdays = 0
    let weekends = 0

    const current = new Date(start)

    while (current <= end) {
      const dayOfWeek = current.getDay()

      if (dayOfWeek === 0 || dayOfWeek === 6) {
        weekends++
      } else {
        weekdays++
      }

      current.setDate(current.getDate() + 1)
    }

    return {
      total: weekdays + weekends,
      weekdays,
      weekends,
    }
  }
}
