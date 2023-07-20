'use client'
//임시로 styled와 use client 사용 >> 서버 사이드를 위한 module.scss 사용으로 변환 필요
import styled, { css } from 'styled-components'

import { useScroll } from '@/model/Hooks/useScroll'
import { opacityApply } from '@/design/styledSystem/opacityRange'
import React from 'react'

import WordStroke from './WordStroke'

type Props = {}

const index = (props: Props) => {
  const [scroll, direction] = useScroll(typeof document !== 'undefined' ? document.scrollingElement : null)
  return (
    // <section id="landing">
    <Landing
      style={{
        transform: `translate3d(0, -${scroll}px, 0)`,
      }}
    >
      <WordWrap top={0} left={100}>
        <WordStroke>We Make</WordStroke>
        <Word>Creative</Word>
      </WordWrap>

      <WordWrap top={400} left={1000}>
        <WordStroke>We Make</WordStroke>
        <Word>Creative Creative</Word>
      </WordWrap>
    </Landing>
    // </section>
  )

  return
}

export default index

const Landing = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  z-index: 10;
  transition: 0.2s transform;
`

type Position = {
  top: number
  left: number
}

const WordWrap = styled.div<Position>`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  z-index: 10;
  max-width: 100%;

  white-space: nowrap;
  /* p:nth-child(even) {
  } */
`

const Word = styled.p`
  position: relative;
  font-family: var(--noto-sans-kr);
  font-size: 120px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: #fff;
  -webkit-text-stroke: 3px #fff;

  white-space: nowrap;
`

// Wrap 사이즈 지정하고
// 내부 요소 중 동영상은 스티키로 붙인다
