import styles from './index.module.scss'
import { TextsBackgoundProps } from './types'

export const TextsBackgound = ({
  classNames,
  text = 'Rentime',
}: TextsBackgoundProps) => {
  return (
    <div className={[styles.background, classNames?.container].join(' ')}>
      <span className={[styles.backgroundText, classNames?.text].join(' ')}>
        {text}
      </span>
      <span className={[styles.backgroundText, classNames?.text].join(' ')}>
        {text}
      </span>
    </div>
  )
}
