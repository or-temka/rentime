export type MenuSectionItem = {
  label: string
  link: string
}

export type MenuSection = {
  name: string
  link: string
  items: MenuSectionItem[]
}
