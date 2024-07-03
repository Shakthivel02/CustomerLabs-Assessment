interface Props {
  selectedSchemas: string[]
  onAddSchema: (schema: string, index?: number) => void
  index?: number
  selectedSchema?: string
}

export default Props
