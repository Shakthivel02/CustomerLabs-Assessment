import styled, { keyframes, css } from "styled-components"
import { ButtonProps } from "./types"

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 40%;
  max-width: 80%;
  max-height: 90%;
  overflow-y: auto;
  transition: width ease 0.3s;

  @media (max-width: 768px) {
    width: 50%; /* Adjust width for tablets and smaller desktop screens */
    max-width: none; /* Remove max-width limit on smaller screens */
  }

  @media (max-width: 480px) {
    width: 70%; /* Adjust width for smaller devices like mobile phones */
  }
`

const Input = styled.input`
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
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

const BlueBox = styled.div`
  background: ${({ color }) => color};
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
`

const scaleIn = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`

const Button = styled.button<ButtonProps>`
  padding: 10px 20px;
  margin-top: 10px;
  background-color: #0056b3;
  border: none;
  font-size: 16px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  ${({ $animationduration, $animationinfinite }) => css`
    animation: ${scaleIn}
      ${$animationduration ? `${$animationduration}s` : "0.5s"} ease
      ${$animationinfinite === "true" ? "infinite" : ""};
  `};

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.95);
  }
`

const CloseButton = styled.button`
  padding: 8px;
  background: #ff1744;
  color: #fff;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`

export { CloseButton, Button, BlueBox, Input, ModalContent, ModalOverlay }
