'use client'

import { useEffect, useState } from 'react'
import { useScroll } from '@/model/Hooks/useScroll'
import useWheel from '@/model/Hooks/useWheel'
import { opacityApply } from '@/design/styledSystem/opacityRange'

import styled from 'styled-components'

type Props = {}

const Header = (props: Props) => {
  // SSR
  const [x, xDirection] = useWheel(typeof document !== 'undefined' ? document.scrollingElement : null)
  const [scroll, direction] = useScroll(typeof document !== 'undefined' ? document.scrollingElement : null)
  const range = opacityApply(2000, 3000)
  console.log('변환 결과', range(scroll, 3)?.toFixed(3))

  return (
    <>
      <HeaderWrapper style={{ left: '200px', backgroundColor: `rgba(0, 0, 0, 0.1)` }}>
        스크롤 : {scroll} <br /> 방향 : {direction} <br /> 필요한 값 얻기 : {range(scroll, 100)?.toFixed(2)}
      </HeaderWrapper>
      <HeaderWrapper style={{ left: '400px' }}>
        스크롤 : {x} <br /> 방향 : {xDirection}
      </HeaderWrapper>

      {/* <HeaderWrapper style={{ left: '600px' }}>
        스크롤 : {scrollD + 600} <br /> 방향 : {directionD + 'hello'}
      </HeaderWrapper> */}
    </>
  )
}

export default Header

const HeaderWrapper = styled.header`
  position: fixed;
  background-color: #fff;
  padding: 16px;
  top: 0;
`
