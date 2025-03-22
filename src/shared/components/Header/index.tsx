import Image from 'next/image'
import styles from './index.module.scss'
import { navigationElements } from './constants'
import Link from 'next/link'
import { ROUTES } from '@/config/routes'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href={ROUTES.HOME}>
        <Image
          alt="Логотип компании rentime"
          src="/next.svg"
          width={70}
          height={20}
        />
      </Link>

      <nav className={styles.navigation}>
        <ul className={styles.navigation_ul}>
          {navigationElements.map((navElem, index) => (
            <Link href={navElem.link} key={index}>
              <li className={styles.navigation_li}>{navElem.label}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  )
}
