import React from 'react'
import { Button } from '../Button'
import styles from './index.module.scss'
import Link from 'next/link'
import { ROUTES } from '@/config/routes'
import { RentButtonProps } from './types'
import { RightArrowSVG } from '../svgs'

export const RentButton = ({
  href = ROUTES.HOME,
  theme = 'light',
}: RentButtonProps) => {
  return (
    <Link href={href}>
      <Button theme={theme} className={styles.rentButton}>
        <span className={styles.rentButton__text}>Арендовать</span>
        <RightArrowSVG
          theme={theme}
          className={styles.rentButton__arrow}
          width={20}
        />
      </Button>
    </Link>
  )
}
