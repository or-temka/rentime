import { ContactButton } from './ContactButton'
import {
  AvitoLogoSVG,
  MailSVG,
  PhoneSVG,
  PinSVG,
  TelegramLogoSVG,
  VkLogoSVG,
} from '@/shared/components'
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
        href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
      >
        {process.env.NEXT_PUBLIC_PHONE_NUMBER_STRING}
      </ContactButton>

      <ContactButton
        icon={
          <PinSVG
            className={[styles.contactBtnIcon, styles.contactBtnIcon__pin].join(
              ' '
            )}
          />
        }
        href={process.env.NEXT_PUBLIC_YANDEX_MAP_ADDRESS_LINK}
      >
        {process.env.NEXT_PUBLIC_ADDRESS}
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
            href={process.env.NEXT_PUBLIC_VK_COMPANY_PROFILE_LINK}
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
            href={process.env.NEXT_PUBLIC_AVITO_COMPANY_PROFILE_LINK}
            className={[
              styles.contactMailBtnContent__icon,
              styles.contactMailBtnContent__icon__avito,
            ].join(' ')}
          >
            <AvitoLogoSVG />
          </a>
          <a
            target="_blank"
            href={process.env.NEXT_PUBLIC_TELEGRAM_COMPANY_PROFILE_LINK}
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
