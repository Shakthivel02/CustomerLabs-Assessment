import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

const Select = styled.select`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;

  @media (max-width: 768px) {
    padding: 8px;
  }

  @media (max-width: 480px) {
    padding: 6px;
  }

  @media (min-width: 769px) {
    padding: 12px;
  }
`

const AddLink = styled.a`
  cursor: pointer;
  color: #007bff;
  text-decoration: none;
`

export { Select, Container, AddLink }
