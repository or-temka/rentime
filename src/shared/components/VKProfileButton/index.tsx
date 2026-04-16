import { Button, VkLogoSVG } from '@/shared/components'
import React from 'react'
import styles from './index.module.scss'

export const VKProfileButton = () => {
  return (
    <a target="_blank" href={process.env.NEXT_PUBLIC_VK_COMPANY_PROFILE_LINK}>
      <Button className={styles.button}>
        <VkLogoSVG height={18} />
      </Button>
    </a>
  )
}
