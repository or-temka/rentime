import { H2 } from '@/shared/components'
import styles from './index.module.scss'

export const OnMap = () => {
  return (
    <section className={styles.section}>
      <H2>На карте</H2>
      <iframe
        className={styles.map}
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A3aa780bccf9cc483b51a400e583348a48e36a214c796bd01d4a3df0e74410a60&amp;source=constructor"
        frameBorder={'0'}
      ></iframe>
    </section>
  )
}
