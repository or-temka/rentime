'use client'

import { useRef } from 'react'
import { Button } from '../Button'
import { SegmentedSelectOption, SegmentedSelectProps } from './types'
import styles from './index.module.scss'
import { PlayTriangle } from '../svgs'

export const SegmentedSelect = ({
  options,
  activeOption,
  setActiveOption,
}: SegmentedSelectProps) => {
  const mobileButtonsListRef = useRef<HTMLDivElement>(null)

  const DesktopButton = (option: SegmentedSelectOption) => {
    const value = option.value
    return (
      <Button
        theme={value === activeOption.value ? 'dark' : 'not-active'}
        onClick={() => setActiveOption(option)}
        key={value}
      >
        {option.label}
      </Button>
    )
  }

  const openSelect = () => {
    if (!mobileButtonsListRef.current) return
    const dispaly = mobileButtonsListRef.current?.style.display
    mobileButtonsListRef.current.style.display =
      dispaly === 'block' ? 'none' : 'block'
  }

  const setMobileActiveButton = (option: SegmentedSelectOption) => {
    setActiveOption(option)
    openSelect()
  }

  return (
    <>
      <div className={styles.desktopButtons}>
        {options.map((option) => DesktopButton(option))}
      </div>

      <div className={styles.desktopButtons__mobile}>
        <Button
          theme="dark"
          onClick={() => openSelect()}
          key={activeOption.value}
          className={styles.mobileActiveButton}
        >
          {activeOption.label}{' '}
          <PlayTriangle width={11} className={styles.mobileActiveButton__svg} />
        </Button>
        <div ref={mobileButtonsListRef} className={styles.notActiveButtons}>
          {options
            .filter((option) => option.value !== activeOption.value)
            .map((notActiveOption) => (
              <Button
                theme="not-active"
                key={notActiveOption.value}
                onClick={() => setMobileActiveButton(notActiveOption)}
              >
                {notActiveOption.label}
              </Button>
            ))}
        </div>
      </div>
    </>
  )
}

export type * from './types'
