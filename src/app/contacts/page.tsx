import { PageHeader } from '@/widgets'
import styles from './page.module.scss'
import { MainContentContainer } from '@/shared/components'

function ContactsPage() {
  return (
    <main>
      <PageHeader
        title="Контакты"
        className={styles.pageHeader}
        shadowClassName={styles.pageHeader__shadow}
      />

      <MainContentContainer>
        
      </MainContentContainer>
    </main>
  )
}

export default ContactsPage
