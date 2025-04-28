import styles from './index.module.scss'

export const MainContentContainer = ({
  children,
  className,
  ...rest
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) => {
  return (
    <div className={[styles.content, className].join(' ')} {...rest}>
      {children}
    </div>
  )
}
