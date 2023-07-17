'use Client'

import { ForwardedRef, forwardRef } from 'react'
import styled from 'styled-components'
import { commonFrame } from '@/design/styledSystem/frame'
import type { FrameController } from '@/design/styledSystem/frame'
import InputTextLabel, { AddErrorType as InputTextType } from '../inputTextLabel/inputTextLabel'
import { FieldError } from 'react-hook-form'

type Errors = {
  [key: string]: FieldError
}

type Props = {
  errors?: FieldError
}

type AddErrorType = Props & InputTextType

// input 을 유지하면서 react hook form 과 연계 되면서 스타일도 부여된 input 을 만들고자 함
// 감싸는 div 는 자식인 input 이 포커스 되었음을 알지 못하므로 이를 감지해주는 값을 전달

const inputWithError = forwardRef((props: AddErrorType, ref: ForwardedRef<HTMLInputElement>) => {
  const SyncError = (errors?: FieldError) => {
    if (errors && errors?.message) {
      return '*' + errors.message
    }
  }

  // ...
  // StyledInputContainer 컴포넌트를 디자인 컴포넌트로 모듈화 해봐라
  return (
    <ErrorMsgArea w={props.w} h={props.h}>
      <InputTextLabel {...props} ref={ref}></InputTextLabel>
      <ErrorText>{SyncError(props.errors)}</ErrorText>
    </ErrorMsgArea>
  )
})

export default inputWithError

const ErrorMsgArea = styled.div<FrameController>`
  ${commonFrame}
`
const ErrorText = styled.span`
  font-size: 12px;
  color: #f00;
  line-height: 1.5;
  padding-left: 24px;
`
