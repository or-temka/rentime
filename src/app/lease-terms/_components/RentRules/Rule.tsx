import { RuleProps } from './types'

export const Rule = ({ title, children }: RuleProps) => {
  return (
    <article>
      <h2>{title}</h2>
      <div>{children}</div>
    </article>
  )
}
