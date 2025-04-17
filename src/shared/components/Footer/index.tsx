import styles from './index.module.scss'
import Link from 'next/link'
import { ROUTES } from '@/config/routes'
import { menuSections } from './constants'
import { Logo } from '../Logo'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href={ROUTES.HOME} className={styles.mobileLogo}>
        <Logo width={43} />
        <span className={styles.siteName}>rentime</span>
      </Link>

      <div className={styles.main}>
        <div className={styles.aside}>
          <Link href={ROUTES.HOME} className={styles.logo}>
            <Logo width={142} />
          </Link>
          <div className={[styles.logos, styles.logos_mobile].join(' ')}>
            logos
          </div>
        </div>
        <nav className={styles.navigation}>
          {menuSections.map((section, index) => {
            return (
              <section key={index} className={styles.navigationSection}>
                <Link
                  href={section.link}
                  className={styles.navigationSection_title}
                >
                  {section.name}
                </Link>
                <ul className={styles.navigationSection_ul}>
                  {section.items.map((item, index) => (
                    <Link href={item.link} key={index}>
                      <li className={styles.navigationSection_li}>
                        {item.label}
                      </li>
                    </Link>
                  ))}
                </ul>
              </section>
            )
          })}
        </nav>
      </div>

      <div className={styles.additional}>
        <div className={[styles.logos, styles.logos_desktop].join(' ')}>
          logos
        </div>
        <div className={styles.additionalRight}>
          <Link href={ROUTES.HOME} className={styles.licenseLink}>
            Лицензионное соглашение
          </Link>
          <div className={styles.splitTextCircle} />
          <p>© 2025 Rentime. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
