import Link from 'next/link'
import { howItWorkItems } from './constants'
import { HowItWorkItem } from './types'
import styles from './index.module.scss'

export const Item = (item: HowItWorkItem, index: number) => {
  return (
    <article className={styles.item}>
      <span className={styles.item__counter}>{`0${index + 1}`}</span>
      <div className={styles.item__info}>
        <h3 className={styles.item__title}>{item.title}</h3>
        <p className={styles.item__paragraph}>{item.paragraph}</p>
      </div>
      <Link href={item.link.url} className={styles.item__link}>
        {item.link.text}
      </Link>
    </article>
  )
}

export const HowItWork = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Как это работает</h2>
      <div className={styles.items}>{howItWorkItems.map(Item)}</div>
    </section>
  )
}
