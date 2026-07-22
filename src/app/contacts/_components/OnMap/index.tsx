import { H2 } from '@/shared/components'
import { ConsentGatedMap } from '@/widgets'
import styles from './index.module.scss'
import { BLOCKS_IDS } from '../../constants'

export const OnMap = () => {
  return (
    <section className={styles.section} id={BLOCKS_IDS.onMap}>
      <H2>На карте</H2>
      <ConsentGatedMap
        className={styles.map}
        title="Адрес Rentime на карте"
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A3aa780bccf9cc483b51a400e583348a48e36a214c796bd01d4a3df0e74410a60&amp;source=constructor"
      />
    </section>
  )
}
