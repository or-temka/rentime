import styles from './index.module.scss'
import Link from 'next/link'
import { ROUTES } from '@/config/routes'
import { menuSections } from './constants'
import { AvitoLogoSVG, Logo, TelegramLogoSVG, VkLogoSVG } from '../svgs'
import { AVITO_COMPANY_PROFILE_LINK } from '@/config/siteInfo'

export const Logos = () => {
  return (
    <>
      <a target="_blank" href="https://google.com">
        <VkLogoSVG width={32} className={styles.serviceLogo} />
      </a>
      <a href={AVITO_COMPANY_PROFILE_LINK} target="_blank">
        <AvitoLogoSVG width={66} className={styles.serviceLogo} />
      </a>
      <a target="_blank" href="https://google.com">
        <TelegramLogoSVG width={25} className={styles.serviceLogo} />
      </a>
    </>
  )
}

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href={ROUTES.HOME} className={styles.mobileLogo}>
        <Logo width={43} className={styles.mobileLogoSvg} />
        <span className={styles.siteName}>rentime</span>
      </Link>

      <div className={styles.main}>
        <div className={styles.aside}>
          <Link href={ROUTES.HOME} className={styles.logo}>
            <Logo width={142} />
          </Link>
          <div className={[styles.logos, styles.logos_mobile].join(' ')}>
            {Logos()}
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
          {Logos()}
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
