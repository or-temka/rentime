import { MainContentContainer } from '@/shared/components'
import { CommonThinPageHeader } from '@/widgets/CommonThinPageHeader'
import { WithdrawConsent } from './WithdrawConsent'
import styles from './page.module.scss'

export const metadata = {
  title: 'Отзыв согласия на cookie | Rentime',
  description:
    'Страница отзыва согласия на использование файлов cookie и аналитики на сайте Rentime.',
  robots: {
    index: false,
    follow: false,
  },
}

function WithdrawPrivacyConsentPage() {
  return (
    <main>
      <CommonThinPageHeader
        title={{ content: 'Отзыв согласия на cookie' }}
        className={styles.pageHeader}
      />

      <MainContentContainer style={{ gap: 20 }}>
        <WithdrawConsent />
      </MainContentContainer>
    </main>
  )
}

export default WithdrawPrivacyConsentPage
