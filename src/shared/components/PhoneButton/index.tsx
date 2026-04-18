import { Button, PhoneSVG } from '@/shared/components'
import React from 'react'
import styles from './index.module.scss'

export const PhoneButton = () => {
  return (
    <a target="_blank" href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}>
      <Button className={styles.button}>
        <PhoneSVG height={18} />
        <span className={styles.button__numberText}>
          {process.env.NEXT_PUBLIC_PHONE_NUMBER_STRING}
        </span>
      </Button>
    </a>
  )
}
