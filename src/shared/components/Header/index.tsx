import styles from './index.module.scss'
import { navigationElements } from './constants'
import Link from 'next/link'
import { ROUTES } from '@/config/routes'
import { Button } from '../Button'
import { Logo } from '../Logo'

export const Header = () => {
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
      </nav>
    </header>
  )
}
