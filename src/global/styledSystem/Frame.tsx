import { isString, defaultToNumber } from '@/global/utilities/typeChecker'
import { css } from 'styled-components'

export type FrameController = {
  w?: string | number
  h?: string | number
}

export const commonFrame = css<FrameController>`
  width: ${(props) => (isString(props.w) ? props.w : props.w + 'px')};
  height: ${(props) => (isString(props.h) ? props.h : props.h + 'px')};
`
export const commonFrameBlur = css<FrameController>`
  border-radius: ${(props) => defaultToNumber(props.h) * 0.25 + 'px'};
`

export const commonFrameActive = css<FrameController>`
  border-radius: ${(props) => defaultToNumber(props.h) * 0.5 + 'px'};
`
