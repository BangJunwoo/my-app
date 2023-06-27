'use Client'

import React from 'react'
import styled from 'styled-components'
import styles from '@/app/page.module.css'
console.log(styles.card)

type Props = {}

// input 을 유지하면서 react hook form 과 연계 되면서 스타일도 부여된 input 을 만들고자 함

const inputText = ({ ...props }: Props) => {
  console.log({ ...props })

  return (
    <StyledInputContainer>
      <StyledInputText placeholder="placeholder..." {...props} />
    </StyledInputContainer>
  )
}

export default inputText

const StyledInputContainer = styled.div`
  --recessed: #d0d0d0;
  display: flex;
  width: 100%;
  height: 44px;
  padding: 0px 20px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  background: var(--recessed, linear-gradient(0deg, #000 0%, #000 100%), rgba(208, 208, 208, 0.5));
  background-blend-mode: LUMINOSITY, COLOR_BURN;
  box-shadow: 1px 1.5px 4px 0px rgba(0, 0, 0, 0.1) inset, 1px 1.5px 4px 0px rgba(0, 0, 0, 0.08) inset,
    0px -0.5px 1px 0px rgba(255, 255, 255, 0.25) inset, 0px -0.5px 1px 0px rgba(255, 255, 255, 0.3) inset;

  :hover {
    background: #e0e0e0;
    border-radius: 100px;
  }
  :active {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    border-radius: 100px;
    background: var(--recessed, linear-gradient(0deg, #000 0%, #000 100%), rgba(208, 208, 208, 0.5));
    background-blend-mode: LUMINOSITY, COLOR_BURN;
    box-shadow: 1px 1.5px 4px 0px rgba(0, 0, 0, 0.1) inset, 1px 1.5px 4px 0px rgba(0, 0, 0, 0.08) inset,
      0px -0.5px 1px 0px rgba(255, 255, 255, 0.25) inset, 0px -0.5px 1px 0px rgba(255, 255, 255, 0.3) inset;
  }
`

const StyledInputText = styled.input`
  width: 100%;
  height: 100%;

  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.15px;
  ::placeholder {
    font-weight: 400;
  }
`
