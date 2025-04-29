import { MainContentContainer } from '@/shared/components'
import styles from './page.module.scss'
import { ThinPageHeader } from '@/widgets'

function LeaseTermsPage() {
  return (
    <main>
      <ThinPageHeader title="Условия аренды" className={styles.pageHeader} />

      <MainContentContainer></MainContentContainer>
    </main>
  )
}

export default LeaseTermsPage
