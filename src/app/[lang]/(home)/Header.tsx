'use client'
import { useState } from 'react'
import { useScroll } from '@/model/Hooks/useScroll'
import useWheel from '@/model/Hooks/useWheel'

import styled from 'styled-components'

type Props = {}

const Header = (props: Props) => {
  // SSR

  const [scroll, direction] = useScroll(typeof document !== 'undefined' ? document.scrollingElement : null)
  const [x, xDirection] = useWheel(typeof document !== 'undefined' ? document.scrollingElement : null)

  return (
    <>
      <HeaderWrapper style={{ left: '200px' }}>
        스크롤 : {scroll} <br /> 방향 : {direction}
      </HeaderWrapper>
      <HeaderWrapper style={{ left: '400px' }}>
        스크롤 : {x} <br /> 방향 : {xDirection}
      </HeaderWrapper>
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
