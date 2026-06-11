'use client'

import { Modal } from '@/shared/components'
import { CalcCostProps } from './types'
import { useCallback, useEffect, useState } from 'react'
import { AppCalendar, Value } from '@/shared/components/AppCalendar'
import styles from './index.module.scss'
import DateTimeUtils, { DaysCount } from '@/shared/utils/DateTimeUtils'
import { getMinRentalDay } from '@/entities/product/utils/getMinRentalDay'
import { calcRentalCost } from '@/entities/product/utils/calcRentalCost'
import { Product } from '@/entities/product'

export const CalcCost = ({ isOpen, onClose, product }: CalcCostProps) => {
  const [value, onChange] = useState<Value | null>(null)
  const [daysCount, setDaysCount] = useState<DaysCount | null>(null)
  const [cost, setCost] = useState<number>()

  const [today] = useState(() => {
    const now = new Date()
    return new Date(now.getFullYear(), now.getMonth(), now.getDate())
  })

  const minDaysCount = getMinRentalDay(product)

  const formattedStartDate =
    Array.isArray(value) && value[0] ? DateTimeUtils.formatDate(value[0]) : null
  const formattedEndDate =
    Array.isArray(value) && value[1] ? DateTimeUtils.formatDate(value[1]) : null

  /** Приводит кол-во дней к нужному, чтобы было не 2 вообщем, а 1 так как с одного дня на другой это 1 день аренды */
  const normalizeDaysCount = (daysCount: DaysCount): DaysCount => {
    let weekdays = daysCount.weekdays
    let weekends = daysCount.weekends

    if (daysCount.weekdays >= 1) {
      weekdays -= 1
    } else {
      weekends -= 1
    }

    return {
      total: daysCount.total - 1,
      weekdays,
      weekends,
    }
  }

  const calcCost = useCallback(
    (product: Product, daysCount: DaysCount): number => {
      const normalizedDaysCount = normalizeDaysCount(daysCount)
      return calcRentalCost(
        product,
        normalizedDaysCount.weekdays,
        normalizedDaysCount.weekends,
      )
    },
    [],
  )

  useEffect(() => {
    if (!daysCount) {
      setCost(undefined)
      return
    }
    const calculatedCost = calcCost(product, daysCount)
    setCost(calculatedCost)
  }, [calcCost, daysCount, product, value])

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <div className={styles.container}>
        <span className={styles.title}>Рассчитать стоимость</span>
        <div className={styles.content}>
          <div className={styles.calendarContainer}>
            <AppCalendar
              onChange={onChange}
              value={value}
              selectRange
              prev2Label={null}
              next2Label={null}
              maxDetail="month"
              minDetail="month"
              showDaysCount
              prohibitSelectSameDate
              minDate={today}
              minRangeDaysCount={minDaysCount}
              setDaysCount={setDaysCount}
            />
          </div>
          {value ? (
            <div className={styles.summary}>
              <div className={styles.summary__content}>
                <div className={styles.price}>
                  <span className={styles.price__text}>
                    Стоимость:{' '}
                    <span className={styles.price__price}>
                      {cost ? `${cost} руб.` : '-'}
                    </span>
                  </span>
                </div>
                <p>
                  <span className={styles.strongPreText}>Забрать:</span>{' '}
                  {formattedStartDate} с{' '}
                  {process.env.NEXT_PUBLIC_OPENING_COMPANY_TIME}-
                  {process.env.NEXT_PUBLIC_CLOSING_COMPANY_TIME}
                </p>
                <p>
                  <span className={styles.strongPreText}>Вернуть:</span>{' '}
                  {formattedEndDate} в такое же время +2 часа.
                </p>
                <p>
                  К примеру, вы забрали {formattedStartDate} в 14:00, а вернуть
                  необходимо будет {formattedEndDate} до 16:00.
                </p>
              </div>
              <p className={styles.summary__hint}>
                Указанная цена является предварительной и в редких случаях может
                отличаться от конечной.
              </p>
            </div>
          ) : (
            <div className={styles.hint}>
              <p className={styles.hint__text}>
                Выберите диапазон дат, чтобы увидеть результат
              </p>
            </div>
          )}
        </div>
        {minDaysCount > 1 && (
          <span className={styles.minDaysWarning}>
            Минимальное кол-во дней аренды для данного товара:{' '}
            <span className={styles.minDaysWarning__value}>{minDaysCount}</span>
          </span>
        )}
      </div>
    </Modal>
  )
}
