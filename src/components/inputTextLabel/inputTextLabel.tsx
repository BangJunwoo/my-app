'use Client'

import { ForwardedRef, forwardRef } from 'react'
import styled from 'styled-components'

import { ZodError } from 'zod'
import InputText, { StyleOptions as InputTextType } from '../inputText/InputText'

type AddErrorType = InputTextType

// input 을 유지하면서 react hook form 과 연계 되면서 스타일도 부여된 input 을 만들고자 함
// 감싸는 div 는 자식인 input 이 포커스 되었음을 알지 못하므로 이를 감지해주는 값을 전달

const inputTextLabel = forwardRef((props: AddErrorType, ref: ForwardedRef<HTMLInputElement>) => {
  // const inputText = forwardRef({ disabled = false, width = '100%', height = 44, ...props }: Props) => {
  console.log('재사용 컴포넌트에 들어오는 값', { ...props })

  // ...
  // StyledInputContainer 컴포넌트를 디자인 컴포넌트로 모듈화 해봐라
  return (
    <LabelArea>
      <PlaceHolder>{props.name}</PlaceHolder>
      <InputText {...props}></InputText>
    </LabelArea>
  )
})

export default inputTextLabel

const LabelArea = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin-top: 24px;
`

const PlaceHolder = styled.span`
  position: absolute;
  left: 0;
  transition: transform 500ms;

  &:has(+ div input.empty) {
    transform: translateX(50%) translateY(0);
  }

  &:has(+ div input:hover, + div input:focus, + div input:not(.empty)) {
    transform: translateX(10%) translateY(-150%);
  }
`
