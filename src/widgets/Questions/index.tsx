import { Collapse, H2 } from '@/shared/components'
import { QuestionsProps } from './types'
import styles from './index.module.scss'

export const Questions = ({
  questions,
  title = 'Ответы на вопросы',
}: QuestionsProps) => {
  return (
    <div className={styles.container}>
      <H2>{title}</H2>
      <div className={styles.questions}>
        {questions.map((question, index) => (
          <Collapse title={question.question} key={index}>
            {question.answer}
          </Collapse>
        ))}
      </div>
    </div>
  )
}

export type * from './types'
