import React, { useState, useEffect, useCallback } from "react"
import schemaOptions from "../../const/schemaOptions"
import { Container, Select, AddLink } from "./style"
import Props from "./types"

const SchemaSelector: React.FC<Props> = ({
  selectedSchemas,
  onAddSchema,
  index,
  selectedSchema,
}) => {
  const [selected, setSelected] = useState(selectedSchema || "")

  useEffect(() => {
    if (selectedSchema) {
      setSelected(selectedSchema)
    }
  }, [selectedSchema])

  const handleSelectChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelected(e.target.value)
      if (index !== undefined) {
        onAddSchema(e.target.value, index)
      }
    },
    [index, onAddSchema]
  )

  const handleAddClick = useCallback(() => {
    if (selected && !selectedSchemas.includes(selected)) {
      onAddSchema(selected)
      setSelected("")
    }
  }, [selected, selectedSchemas, onAddSchema])

  return (
    <Container>
      <Select value={selected} onChange={handleSelectChange}>
        <option value="">Add schema to segment</option>
        {schemaOptions
          .filter(
            (option) =>
              !selectedSchemas.includes(option.value) ||
              option.value === selected
          )
          .map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
      </Select>
      {index === undefined && (
        <AddLink onClick={handleAddClick}>+ Add new schema</AddLink>
      )}
    </Container>
  )
}

export default React.memo(SchemaSelector)
