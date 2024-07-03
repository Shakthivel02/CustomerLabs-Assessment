// src/components/SegmentPage.tsx
import React, { useState } from "react"
import SegmentModal from "../segmentModal/SegmentModal"
import { Container } from "./style"
import { Button } from "../segmentModal/style"

export const SegmentPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <Container>
      <Button
        $animationinfinite={"true"}
        $animationduration={0.4}
        onClick={handleOpenModal}
      >
        Save segment
      </Button>
      {isModalOpen && <SegmentModal onClose={handleCloseModal} />}
    </Container>
  )
}
