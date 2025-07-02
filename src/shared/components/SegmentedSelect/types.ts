export type SegmentedSelectOption<Value extends string = string> = {
  value: Value
  label: string
}

export type SegmentedSelectProps = {
  options: SegmentedSelectOption[]
  activeOption: SegmentedSelectOption
  setActiveOption:
    | React.Dispatch<React.SetStateAction<SegmentedSelectOption>>
    | ((option: SegmentedSelectOption) => void)
  classNames?: {
    desktop?: {
      buttons?: string
    }
    mobile?: {
      buttons?: string
      activeButton?: string
      activeButtonSVG?: string
      notActiveButtons?: string
    }
  }
}
