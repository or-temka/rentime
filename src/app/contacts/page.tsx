import { ThinPageHeader } from '@/widgets'
import styles from './page.module.scss'
import { MainContentContainer } from '@/shared/components'
import { ContactButtons, OnMap } from './_components'

function ContactsPage() {
  return (
    <main>
      <ThinPageHeader title="Контакты" className={styles.pageHeader} />

      <MainContentContainer>
        <ContactButtons />
        <OnMap />
      </MainContentContainer>
    </main>
  )
}

export default ContactsPage
