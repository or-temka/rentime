import { ContactButton } from './ContactButton'
import {
  AvitoLogoSVG,
  MailSVG,
  PhoneSVG,
  PinSVG,
  TelegramLogoSVG,
  VkLogoSVG,
} from '@/shared/components'
import {
  ADDRESS,
  AVITO_COMPANY_PROFILE_LINK,
  PHONE_NUMBER,
} from '@/config/siteInfo'
import styles from './index.module.scss'

export const ContactButtons = () => {
  return (
    <section className={styles.container}>
      <ContactButton
        icon={
          <PhoneSVG
            className={[
              styles.contactBtnIcon,
              styles.contactBtnIcon__phone,
            ].join(' ')}
          />
        }
        href="https://google.com"
      >
        {PHONE_NUMBER}
      </ContactButton>

      <ContactButton
        icon={
          <PinSVG
            className={[styles.contactBtnIcon, styles.contactBtnIcon__pin].join(
              ' '
            )}
          />
        }
        href="https://google.com"
      >
        {ADDRESS}
      </ContactButton>

      <ContactButton
        icon={
          <MailSVG
            className={[
              styles.contactBtnIcon,
              styles.contactBtnIcon__mail,
            ].join(' ')}
          />
        }
      >
        <div className={styles.contactMailBtnContent}>
          <a
            target="_blank"
            href="https://google.com"
            className={styles.contactMailBtnContent__link}
          >
            <VkLogoSVG
              className={[
                styles.contactMailBtnContent__icon,
                styles.contactMailBtnContent__icon__vk,
              ].join(' ')}
            />
          </a>
          <a
            target="_blank"
            href={AVITO_COMPANY_PROFILE_LINK}
            className={[
              styles.contactMailBtnContent__icon,
              styles.contactMailBtnContent__icon__avito,
            ].join(' ')}
          >
            <AvitoLogoSVG />
          </a>
          <a
            target="_blank"
            href="https://google.com"
            className={[
              styles.contactMailBtnContent__icon,
              styles.contactMailBtnContent__icon__telegram,
            ].join(' ')}
          >
            <TelegramLogoSVG />
          </a>
        </div>
      </ContactButton>
    </section>
  )
}
