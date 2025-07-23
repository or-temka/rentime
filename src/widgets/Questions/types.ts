export type QuestionBlock = {
  question: string
  answer: React.ReactNode
}

export interface QuestionsProps {
  questions: QuestionBlock[]
  title?: string
}
