import { Button, PhoneSVG } from '@/shared/components'
import React from 'react'
import styles from './index.module.scss'

export const PhoneButton = () => {
  return (
    <a target="_blank" href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}>
      <Button className={styles.button}>
        <PhoneSVG height={18} />
      </Button>
    </a>
  )
}
