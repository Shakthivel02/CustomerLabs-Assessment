import React, { useState, useCallback } from "react"
import SchemaSelector from "../schemaSelector/SchemaSelector"
import schemaOptions from "../../const/schemaOptions"
import { useDispatch } from "react-redux"
import {
  BlueBox,
  Button,
  CloseButton,
  Input,
  ModalContent,
  ModalOverlay,
} from "./style"
import Props from "./types"
import { sendFormData } from "../../redux/segmentData/api"

export const SegmentModal: React.FC<Props> = ({ onClose }) => {
  const [segmentName, setSegmentName] = useState("")
  const [schemas, setSchemas] = useState<string[]>([])

  const dispatch = useDispatch()

  const handleAddSchema = useCallback(
    (schema: string, index?: number) => {
      const newSchemas = [...schemas]
      if (index !== undefined) {
        newSchemas[index] = schema
      } else {
        newSchemas.push(schema)
      }
      setSchemas(newSchemas)
    },
    [schemas]
  )

  const handleSaveSegment = useCallback(() => {
    const data = {
      segment_name: segmentName,
      schema: schemas.map((schema) => ({
        [schema]: schemaOptions.find((option) => option.value === schema)
          ?.label,
      })),
    }
    dispatch(sendFormData(data))
    console.log(data) // Send this data to the server
    onClose()
  }, [segmentName, schemas, dispatch, onClose])

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        <h2>Save Segment</h2>
        <Input
          type="text"
          placeholder="Segment Name"
          value={segmentName}
          onChange={(e) => setSegmentName(e.target.value)}
        />
        <SchemaSelector
          onAddSchema={handleAddSchema}
          selectedSchemas={schemas}
        />
        <BlueBox color={schemas.length !== 0 ? "#e0f7fa" : "#FFFFFF"}>
          {schemas.map((schema, index) => (
            <SchemaSelector
              key={index}
              index={index}
              selectedSchema={schema}
              selectedSchemas={schemas}
              onAddSchema={handleAddSchema}
            />
          ))}
        </BlueBox>
        <Button onClick={handleSaveSegment}>Save Segment</Button>
      </ModalContent>
    </ModalOverlay>
  )
}

export default SegmentModal
