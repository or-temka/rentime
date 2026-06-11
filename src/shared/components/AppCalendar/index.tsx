'use client'

import { useEffect, useState, useMemo } from 'react'
import Calendar, { CalendarProps } from 'react-calendar'
import { AppCalendarProps } from './types'
import DateTimeUtils from '@/shared/utils/DateTimeUtils'
import './index.scss'
import styles from './index.module.scss'

export const AppCalendar = ({
  value: propValue,
  setDaysCount,
  prohibitSelectSameDate,
  minRangeDaysCount,
  onChange: propOnChange,
  showDaysCount,
  ...restProps
}: AppCalendarProps) => {
  const [value, setValue] = useState<AppCalendarProps['value']>(propValue)

  useEffect(() => {
    setValue(propValue)
  }, [propValue])

  const daysCount = useMemo(() => {
    if (Array.isArray(value) && value[0] && value[1]) {
      return DateTimeUtils.calcDaysCount(value[0] as Date, value[1] as Date)
    }
    return null
  }, [value])

  useEffect(() => {
    if (setDaysCount) {
      setDaysCount(daysCount)
    }
  }, [daysCount, setDaysCount])

  const onChange: CalendarProps['onChange'] = (newValue, event) => {
    let finalValue = newValue

    if (Array.isArray(newValue) && newValue[0] && newValue[1]) {
      const [startDate, endDate] = newValue

      if (prohibitSelectSameDate) {
        const minDayRange = minRangeDaysCount || 1
        const currentSelectedDays = DateTimeUtils.calcDaysCount(
          startDate,
          endDate,
        ).total

        if (currentSelectedDays <= minDayRange) {
          const nextDay = new Date(startDate)
          nextDay.setDate(nextDay.getDate() + minDayRange)
          finalValue = [startDate, nextDay]
        }
      }
    }

    setValue(finalValue)
    if (propOnChange) {
      propOnChange(finalValue, event)
    }
  }

  return (
    <>
      <Calendar {...restProps} onChange={onChange} value={value} />
      {showDaysCount && (
        <div className={styles.daysCount}>
          <span>Кол-во дней: </span>
          <span className={styles.daysCount__count}>
            {daysCount ? daysCount.total - 1 : '-'}
          </span>
        </div>
      )}
    </>
  )
}

export type * from './types'
