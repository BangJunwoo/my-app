'use Client'

import { FocusEvent, ForwardedRef, InputHTMLAttributes, forwardRef } from 'react'
import styled from 'styled-components'
import { commonFrame, commonFrameActive, commonFrameBlur } from '@/global/styledSystem/Frame'
import type { FrameController } from '@/global/styledSystem/Frame'
import { isClass, pushEmpty } from '@/global/utilities/classNamer'

export type StyleOptions = FrameController & InputHTMLAttributes<HTMLInputElement>

// input 을 유지하면서 react hook form 과 연계 되면서 스타일도 부여된 input 을 만들고자 함
// 감싸는 div 는 자식인 input 이 포커스 되었음을 알지 못하므로 이를 감지해주는 값을 전달

const inputText = forwardRef(({ ...props }: StyleOptions, ref: ForwardedRef<HTMLInputElement>) => {
  const fnOnBlur = (event: FocusEvent<HTMLInputElement>) => {
    pushEmpty(event.currentTarget)
    props.onBlur && props.onBlur(event)
  }
  // 이벤트 리스너 안에 이벤트리스너 대응 코드를 넣었을 경우 props 내부에 넣을 수 있음
  return (
    <StyledInputContainer
      className={isClass(props.disabled)}
      w={props.w}
      h={props.h}
      hidden={props.hidden ? props.hidden : false}
    >
      <StyledInputText
        placeholder=""
        ref={(ref) => {
          ref && pushEmpty(ref)
          return ref
        }}
        {...props}
        onBlur={fnOnBlur}
      />
    </StyledInputContainer>
  )
})

export default inputText

// 임시 스타일
const StyledInputContainer = styled.div<FrameController>`
  ${commonFrame}
  ${commonFrameBlur}
  --recessed: #f0f0f0;
  display: flex;
  padding: 0px 20px;
  align-items: center;
  flex-shrink: 0;
  background: var(--recessed, linear-gradient(0deg, #000 0%, #000 100%), rgba(208, 208, 208, 0.5));
  background-blend-mode: LUMINOSITY, COLOR_BURN;
  box-shadow: 1px 1.5px 4px 0px rgba(0, 0, 0, 0.1) inset, 1px 1.5px 4px 0px rgba(0, 0, 0, 0.08) inset,
    0px -0.5px 1px 0px rgba(255, 255, 255, 0.25) inset, 0px -0.5px 1px 0px rgba(255, 255, 255, 0.3) inset;

  transition-property: border-radius, background;
  transition-duration: 200ms;

  &:hover,
  &:has(input:focus) {
    ${commonFrameActive}
    background: #e0e0e0;
  }
  &:active {
    ${commonFrameActive}

    display: flex;
    align-items: center;
    flex-shrink: 0;
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
