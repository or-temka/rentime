export type ModalProps = {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
  sheetOnMobile?: boolean
  classNames?: Partial<{
    overlay: string
    wrapper: string
    content: string
    header: string
    title: string
    body: string
    footer: string
    closeBtn: string
  }>
}
