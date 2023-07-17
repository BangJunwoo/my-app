'use client'
import React, { useRef, useState } from 'react'

interface VideoProps {
  src: string
}

const Video: React.FC<VideoProps> = ({ src }) => {
  const [currentTime, setCurrentTime] = useState<number>(0)
  const videoRef = useRef<HTMLVideoElement & HTMLMediaElement>(null)

  const [playing, setPlaying] = useState<boolean>(false)

  const onVideoPress = () => {
    if (playing) {
      videoRef.current?.pause()
      setPlaying(false)
    } else {
      videoRef.current?.play()
      setPlaying(true)
    }
  }
  const onForward10Sec = () => {
    if (videoRef.current) {
      console.log('current 체크', videoRef.current.duration)
      console.log(videoRef.current?.currentTime)

      videoRef.current.currentTime = currentTime + 0.1
      setCurrentTime(currentTime + 0.1)
    }
  }

  const onBackward10Sec = () => {
    if (videoRef.current) {
      console.log(videoRef.current?.currentTime)
      videoRef.current.currentTime = currentTime - 0.1
      setCurrentTime(currentTime - 0.1)
    }
  }

  return (
    <div>
      <button onClick={onBackward10Sec}>-10초</button>

      <button onClick={onForward10Sec}>+10초</button>
      <video ref={videoRef} onClick={onVideoPress} src={src} />
    </div>
  )
}

export default Video
