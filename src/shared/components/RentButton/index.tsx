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
  target = '_self',
  ...rest
}: RentButtonProps) => {
  const ButtonComponent = (
    <Button theme={theme} className={styles.rentButton} {...rest}>
      <span className={styles.rentButton__text}>Арендовать</span>
      <RightArrowSVG
        theme={theme === 'light' ? 'dark' : 'light'}
        className={styles.rentButton__arrow}
        width={20}
      />
    </Button>
  )

  if (!href) return ButtonComponent

  return (
    <Link href={href} target={target}>
      {ButtonComponent}
    </Link>
  )
}
