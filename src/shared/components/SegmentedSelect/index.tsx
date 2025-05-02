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
  classNames,
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
      <div
        className={[styles.desktopButtons, classNames?.desktop?.buttons].join(
          ' '
        )}
      >
        {options.map((option) => DesktopButton(option))}
      </div>

      <div
        className={[
          styles.desktopButtons__mobile,
          classNames?.mobile?.buttons,
        ].join(' ')}
      >
        <Button
          theme="dark"
          onClick={() => openSelect()}
          key={activeOption.value}
          className={[
            styles.mobileActiveButton,
            classNames?.mobile?.activeButton,
          ].join(' ')}
        >
          {activeOption.label}{' '}
          <PlayTriangle
            width={11}
            className={[
              styles.mobileActiveButton__svg,
              classNames?.mobile?.activeButtonSVG,
            ].join(' ')}
          />
        </Button>
        <div
          ref={mobileButtonsListRef}
          className={[
            styles.notActiveButtons,
            classNames?.mobile?.notActiveButtons,
          ].join(' ')}
        >
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
