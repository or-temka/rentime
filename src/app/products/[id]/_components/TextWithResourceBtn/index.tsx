import { Button } from '@/shared/components'
import { TextWithResourceBtnProps } from './types'
import styles from './index.module.scss'

export const TextWithResourceBtn = ({
  text,
  button,
}: TextWithResourceBtnProps) => {
  return (
    <div className={styles.container}>
      <p className={styles.paragraph}>{text}</p>
      <a href={button.link} target="_blank" rel="noopener noreferrer">
        <Button hoverAnimation theme="dark">
          {button.text}
        </Button>
      </a>
    </div>
  )
}
