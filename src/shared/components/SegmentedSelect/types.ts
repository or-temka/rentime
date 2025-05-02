export type SegmentedSelectOption = {
  value: string
  label: string
}

export type SegmentedSelectProps = {
  options: SegmentedSelectOption[]
  activeOption: SegmentedSelectOption
  setActiveOption: React.Dispatch<React.SetStateAction<SegmentedSelectOption>>
}
