import React from 'react'
import styled from 'styled-components'

type Props = {
  children: React.ReactNode
}

const WordStroke = ({ children }: Props) => {
  return (
    <Word>
      {children}
      <Front>{children}</Front>
      <Back>{children}</Back>
    </Word>
  )
}

export default WordStroke

const Word = styled.div`
  position: relative;
  font-family: var(--noto-sans-kr);
  font-size: 160px;
  font-style: normal;
  font-weight: 700;
  line-height: 170px;
  color: transparent;
`

const Front = styled.p`
  position: absolute;
  top: 0;
  left: 0;

  font-family: var(--noto-sans-kr);
  font-size: 160px;
  font-style: normal;
  font-weight: 700;
  line-height: 170px;
  color: #202020;
  z-index: 10;
  white-space: nowrap;
`

const Back = styled.p`
  position: absolute;
  top: 0;
  left: 0;

  font-family: var(--noto-sans-kr);
  font-size: 160px;
  font-style: normal;
  font-weight: 700;
  line-height: 170px;
  -webkit-text-stroke: 4px #fff;
  white-space: nowrap;
`
