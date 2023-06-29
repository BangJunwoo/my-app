'use Client'

import { FocusEvent, ForwardedRef, InputHTMLAttributes, forwardRef } from 'react'
import styled from 'styled-components'
import { isString, defaultToNumber } from '@/utilities/typeChecker'
import { isClass, pushEmpty } from '@/utilities/class/classNamer'

type UIController = {
  w?: string | number
  h?: string | number
}

export type StyleOptions = UIController & InputHTMLAttributes<HTMLInputElement>

// input 을 유지하면서 react hook form 과 연계 되면서 스타일도 부여된 input 을 만들고자 함
// 감싸는 div 는 자식인 input 이 포커스 되었음을 알지 못하므로 이를 감지해주는 값을 전달

const inputText = forwardRef(({ w = '100%', h = 44, ...props }: StyleOptions, ref: ForwardedRef<HTMLInputElement>) => {
  console.log('inputText props', props)

  const fnOnBlur = (event: FocusEvent<HTMLInputElement>) => {
    pushEmpty(event.currentTarget)
    props.onBlur && props.onBlur(event)
  }

  return (
    <StyledInputContainer className={isClass(props.disabled)} w={w} h={h} hidden={props.hidden ? props.hidden : false}>
      <StyledInputText
        placeholder=""
        ref={(ref) => {
          if (ref) pushEmpty(ref)
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
const StyledInputContainer = styled.div<UIController>`
  --recessed: #f0f0f0;
  display: flex;
  width: ${(props) => (isString(props.w) ? props.w : props.w + 'px')};
  height: ${(props) => (isString(props.h) ? props.h : props.h + 'px')};
  border-radius: ${(props) => defaultToNumber(props.h) * 0.25 + 'px'};
  padding: 0px 20px;
  align-items: center;
  flex-shrink: 0;
  background: var(--recessed, linear-gradient(0deg, #000 0%, #000 100%), rgba(208, 208, 208, 0.5));
  background-blend-mode: LUMINOSITY, COLOR_BURN;
  box-shadow: 1px 1.5px 4px 0px rgba(0, 0, 0, 0.1) inset, 1px 1.5px 4px 0px rgba(0, 0, 0, 0.08) inset,
    0px -0.5px 1px 0px rgba(255, 255, 255, 0.25) inset, 0px -0.5px 1px 0px rgba(255, 255, 255, 0.3) inset;

  transition-property: border-radius, background;
  transition-duration: 1s;

  &:hover,
  &:has(input:focus) {
    background: #e0e0e0;
    border-radius: ${(props) => defaultToNumber(props.h) * 0.5 + 'px'};
  }
  &:active {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    border-radius: ${(props) => defaultToNumber(props.h) * 0.5 + 'px'};
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
