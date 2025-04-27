import { PageHeader } from '@/widgets'
import styles from './page.module.scss'

function ContactsPage() {
  return (
    <main>
      <PageHeader title="Контакты" className={styles.pageHeader} shadowClassName={styles.pageHeader__shadow} />
    </main>
  )
}

export default ContactsPage
