import Image from 'next/image'
import styles from './index.module.scss'
import Link from 'next/link'
import { ROUTES } from '@/config/routes'
import { menuSections } from './constants'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <div className={styles.aside}>
          <Link href={ROUTES.HOME}>
            <Image
              alt="Логотип компании rentime"
              src="/next.svg"
              width={300}
              height={63}
            />
          </Link>
        </div>
        <nav className={styles.navigation}>
          {menuSections.map((section, index) => {
            return (
              <section key={index} className={styles.navigationSection}>
                <h3 className={styles.navigationSection_title}>
                  {section.name}
                </h3>
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
        <div>logos</div>
        <p>© 2025 Rentime. Все права защищены.</p>
        <Link href={ROUTES.HOME}>Лицензионное соглашение</Link>
      </div>
    </footer>
  )
}
