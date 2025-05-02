'use client'

import styles from './index.module.scss'
import { navigationElements } from './constants'
import Link from 'next/link'
import { ROUTES } from '@/config/routes'
import { Button } from '../Button'
import { Logo } from '../svgs'
import { useEffect, useState } from 'react'

export const Header = () => {
  const [showMenuModal, setShowMenuModal] = useState(false)

  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    setVh()
    window.addEventListener('resize', setVh)
    return () => window.removeEventListener('resize', setVh)
  }, [])

  useEffect(() => {
    if (showMenuModal) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }, [showMenuModal])

  return (
    <header className={styles.header}>
      <Link href={ROUTES.HOME} className={styles.logoContainer}>
        <Logo width={43} />
        <span className={styles.siteName}>rentime</span>
      </Link>

      <nav className={styles.navigation}>
        <ul className={styles.navigation_ul}>
          {navigationElements.map((navElem, index) => (
            <Link href={navElem.link} key={index}>
              <li className={styles.navigation_li}>{navElem.label}</li>
            </Link>
          ))}
        </ul>
        <Button
          theme="light"
          variant="outlined"
          hoverAnimation
          className={styles.writeButton}
        >
          Написать
        </Button>
        <div
          className={styles.mobileMenuBtn}
          onClick={() => setShowMenuModal(true)}
        >
          <div className={styles.mobileMenuBtn__item} />
          <div className={styles.mobileMenuBtn__item} />
          <div className={styles.mobileMenuBtn__item} />
        </div>
      </nav>

      {showMenuModal && (
        <div className={styles.mobileMenuModal}>
          <div
            className={styles.mobileMenuModal__fill}
            onClick={() => setShowMenuModal(false)}
          />
          <aside className={styles.aside}>
            <nav className={styles.mobileNavigation}>
              <div className={styles.aside__labelContainer}>
                <span className={styles.aside__label}>Меню</span>
              </div>
              <ul className={styles.mobileNavigation__ul}>
                {navigationElements.map((navElem, index) => (
                  <Link
                    onClick={() => setShowMenuModal(false)}
                    href={navElem.link}
                    key={index}
                  >
                    <li className={styles.mobileNavigation__li}>
                      {navElem.label}
                    </li>
                  </Link>
                ))}
              </ul>
            </nav>
            <div className={styles.bottomNav}>
              <Button
                theme="light"
                variant="outlined"
                hoverAnimation
                className={styles.writeButton_mobile}
              >
                Написать
              </Button>
              <div
                className={styles.aside__closeBtnContainer}
                onClick={() => setShowMenuModal(false)}
              >
                <span className={styles.aside__closeBtn}>Закрыть</span>
              </div>
            </div>
          </aside>
        </div>
      )}
    </header>
  )
}
