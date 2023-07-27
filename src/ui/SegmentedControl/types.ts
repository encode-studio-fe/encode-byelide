export type SegmentedControlItem = {
  value: string
  label: string
}

export interface SegmentedControlProps {
  value?: string
  data: SegmentedControlItem[]
}
