interface Props {
  onClose: () => void
}

export interface ButtonProps {
  $animationinfinite?: string
  $animationduration?: number
}

export interface DataProps {
  segment_name: string
  schema: Array<{ [key: string]: string }>
}

export default Props
