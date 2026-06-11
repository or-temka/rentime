import { DaysCount } from '@/shared/utils/DateTimeUtils'
import { Dispatch, SetStateAction } from 'react'
import { CalendarProps } from 'react-calendar'

export type AppCalendarProps = {
  daysCount?: DaysCount | null
  setDaysCount?: Dispatch<SetStateAction<DaysCount | null>>
  showDaysCount?: boolean
  prohibitSelectSameDate?: boolean
  minRangeDaysCount?: number
} & CalendarProps

export type ValuePiece = Date | null
export type Value = ValuePiece | [ValuePiece, ValuePiece]
