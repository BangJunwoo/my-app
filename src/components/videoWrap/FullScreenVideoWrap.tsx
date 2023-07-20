'use client'
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { useScroll } from '@/model/Hooks/useScroll'
import { opacityApply } from '@/design/styledSystem/opacityRange'
// const [scroll, direction] = useScroll(typeof document !== 'undefined' ? document.scrollingElement : null)

interface VideoProps {
  src: string
}
const scrollRange = opacityApply(0, 600)

const Video: React.FC<VideoProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement & HTMLMediaElement>(null)
  const [scroll, direction] = useScroll(typeof document !== 'undefined' ? document.scrollingElement : null)

  return (
    <VideoContainer>
      <VideoWrap width={scrollRange(scroll, 1600, 428)}>
        <video ref={videoRef} muted loop autoPlay src={src} width={1600} />
      </VideoWrap>
    </VideoContainer>
  )
}

export default Video

type Video = {
  width: number
}

const VideoContainer = styled.article`
  position: sticky;
  top: 150px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: 1600px;
  margin: 0 auto;
  margin-top: -600px;

  /* margin-top: -500px; */
`

const VideoWrap = styled.div<Video>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;
  width: ${(props) => props.width}px;

  transition-duration: 0.1s;
  will-change: width, left, top;
  transition-property: width, left, top;

  border-radius: 32px;

  // left: 10vw;
  // 사이즈가 max-width를 넘지 않는데 left는 넘어지기 때문에 왼쪽으로 쏠리게 되는 상황이 발생함

  border: 2px solid #fff;
  background-color: #fff;
  overflow: hidden;
`
