import Link from 'next/link'
import { howItWorkItems } from './constants'
import { HowItWorkItem } from './types'

export const Item = (item: HowItWorkItem, index: number) => {
  return (
    <article>
      <span>{`0${index + 1}`}</span>
      <div>
        <h3>{item.title}</h3>
        <p>{item.paragraph}</p>
      </div>
      <Link href={item.link.url}>{item.link.text}</Link>
    </article>
  )
}

export const HowItWork = () => {
  return (
    <section>
      <h2>Как это работает</h2>
      <div>{howItWorkItems.map(Item)}</div>
    </section>
  )
}
