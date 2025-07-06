import styles from './index.module.scss'
import Link from 'next/link'
import { ROUTES } from '@/config/routes'
import { menuSections } from './constants'
import { AvitoLogoSVG, Logo, TelegramLogoSVG, VkLogoSVG } from '../svgs'

export const Logos = () => {
  return (
    <>
      <a target="_blank" href={process.env.NEXT_PUBLIC_VK_COMPANY_PROFILE_LINK}>
        <VkLogoSVG width={32} className={styles.serviceLogo} />
      </a>
      <a
        href={process.env.NEXT_PUBLIC_AVITO_COMPANY_PROFILE_LINK}
        target="_blank"
      >
        <AvitoLogoSVG width={66} className={styles.serviceLogo} />
      </a>
      <a
        target="_blank"
        href={process.env.NEXT_PUBLIC_TELEGRAM_COMPANY_PROFILE_LINK}
      >
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
          <p>г. Ярославль, ул. 2 Мельничная 35</p>
          <div className={styles.splitTextCircle} />
          <p>© 2025 Rentime. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
