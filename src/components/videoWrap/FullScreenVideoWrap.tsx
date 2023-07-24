'use client'
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { useScroll } from '@/model/Hooks/useScroll'
import { opacityApply } from '@/design/styledSystem/opacityRange'
// const [scroll, direction] = useScroll(typeof document !== 'undefined' ? document.scrollingElement : null)

interface VideoProps {
  src: string
}
const scrollRange = opacityApply(0, 200)

const Video: React.FC<VideoProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement & HTMLMediaElement>(null)
  const [scroll, direction] = useScroll(typeof document !== 'undefined' ? document.scrollingElement : null)

  return (
    <VideoContainer>
      <VideoWrap
        style={{
          width: scrollRange(scroll, 1080 * 0.7, 540 * 0.7) * 1.68,
          height: scrollRange(scroll, 1080 * 0.7, 540 * 0.7),
        }}
      >
        <video ref={videoRef} muted loop autoPlay src={src} height={scrollRange(scroll, 1080 * 0.7, 540 * 0.7)} />
      </VideoWrap>
    </VideoContainer>
  )
}

export default Video

// 마진 잡는 게 컨테이너 사이즈가 된다
const VideoContainer = styled.article`
  position: sticky;
  top: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  /* margin-left: auto;
  margin-right: 160px; */

  margin-right: 200px;
  margin-top: -300px;

  /* margin-top: -500px; */
`

// 비디오 커지는 위치 제어
const VideoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 960px;
  width: 540px; */

  transition-duration: 500ms;
  will-change: width, left, top, height;
  transition-property: width, left, top, height;

  border-radius: 32px;

  // left: 10vw;
  // 사이즈가 max-width를 넘지 않는데 left는 넘어지기 때문에 왼쪽으로 쏠리게 되는 상황이 발생함

  border: 2px solid #fff;
  background-color: #fff;
  overflow: hidden;

  video {
    transition-duration: 500ms;
    will-change: width, height;
    transition-property: width, height;
  }
`
