import { MainContentContainer } from '@/shared/components'
import styles from './page.module.scss'
import { ThinPageHeader } from '@/widgets'
import { RentRules } from './_components'

function LeaseTermsPage() {
  return (
    <main>
      <ThinPageHeader title="Условия аренды" className={styles.pageHeader} />

      <MainContentContainer>
        <RentRules />
      </MainContentContainer>
    </main>
  )
}

export default LeaseTermsPage
