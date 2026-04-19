import React from 'react'
import { ThinPageHeader } from '../ThinPageHeader'
import styles from './index.module.scss'
import { CommonThinPageHeaderProps } from './types'

export const CommonThinPageHeader = (props: CommonThinPageHeaderProps) => {
  return (
    <ThinPageHeader
      {...props}
      className={[styles.pageHeader, props.className].join(' ')}
    />
  )
}
