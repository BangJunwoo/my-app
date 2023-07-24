'use client'
//임시로 styled와 use client 사용 >> 서버 사이드를 위한 module.scss 사용으로 변환 필요
import styled, { css } from 'styled-components'

import { useScroll } from '@/model/Hooks/useScroll'
import { opacityApply } from '@/design/styledSystem/opacityRange'
import React from 'react'

import WordStroke from './WordStroke'

const index = () => {
  const [scroll, direction] = useScroll(typeof document !== 'undefined' ? document.scrollingElement : null)

  return (
    <Landing
      style={{
        transform: `translate3d(0, -${scroll}px, 0)`,
      }}
    >
      <WordWrap top={246} left={0} id="landing">
        <WordStroke>We Integrate</WordStroke>
      </WordWrap>
      <WordWrap top={478} left={0}>
        <Word>AI Tech</Word>
      </WordWrap>
      <WordWrap top={710} left={0}>
        <WordStroke>into</WordStroke>
        <WordWrap top={0} left={355}>
          <WordStroke>Gaming</WordStroke>
        </WordWrap>
        <WordWrap top={-30} left={345}>
          <Word>Gaming</Word>
        </WordWrap>
      </WordWrap>

      <RowWrap top={359} left={293}>
        <Long />
        <Short />
      </RowWrap>
    </Landing>
    // </section>
  )

  return
}

export default index

const Long = styled.div`
  width: 776px;
  height: 56px;
  border-radius: 28px;
  flex-shrink: 0;
  background-color: rgba(255, 255, 255, 0.2);
`

const Short = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  flex-shrink: 0;
  background-color: rgba(255, 255, 255, 0.2);
`

const Landing = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;

  z-index: 10;
  transition: 0.2s transform;
`

type Position = {
  top: number
  left: number
}

const RowWrap = styled.div<Position>`
  position: absolute;
  display: flex;
  flex-direction: row;
  gap: 72px;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  z-index: 10;
  max-width: 100%;

  white-space: nowrap;
  /* p:nth-child(even) {
  } */
`

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
  font-size: 160px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: #fff;
  -webkit-text-stroke: 3px #fff;

  white-space: nowrap;
`

// Wrap 사이즈 지정하고
// 내부 요소 중 동영상은 스티키로 붙인다
