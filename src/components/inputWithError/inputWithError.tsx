'use Client'

import { ForwardedRef, forwardRef } from 'react'
import styled from 'styled-components'

import { ZodError } from 'zod'
import InputText, { StyleOptions as InputTextType } from '../inputText/InputText'

type AddErrorType = ZodError & InputTextType

// input 을 유지하면서 react hook form 과 연계 되면서 스타일도 부여된 input 을 만들고자 함
// 감싸는 div 는 자식인 input 이 포커스 되었음을 알지 못하므로 이를 감지해주는 값을 전달

const inputWithError = forwardRef((props: AddErrorType, ref: ForwardedRef<HTMLInputElement>) => {
  // const inputText = forwardRef({ disabled = false, width = '100%', height = 44, ...props }: Props) => {
  console.log('재사용 컴포넌트에 들어오는 값', { ...props })

  // ...
  // StyledInputContainer 컴포넌트를 디자인 컴포넌트로 모듈화 해봐라
  return (
    <ErrorMsgArea>
      <InputText {...props}></InputText>
      <ErrorText></ErrorText>
    </ErrorMsgArea>
  )
})

export default inputWithError

const ErrorMsgArea = styled.div``
const ErrorText = styled.span``
