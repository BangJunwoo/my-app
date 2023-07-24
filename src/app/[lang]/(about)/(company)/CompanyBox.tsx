'use client'
//임시로 styled와 use client 사용 >> 서버 사이드를 위한 module.scss 사용으로 변환 필요
import styled from 'styled-components'

import React, { useState } from 'react'
import { Button } from '@/components/strokeButton/Button'
import Image from 'next/image'

type Props = {
  src: string
  label: string
  title: string
  image: string
  onClick: () => void
}

const CompanyBox = ({ src, title, label, image, onClick }: Props) => {
  const [hover, setHover] = useState(false)
  const [boxHover, setBoxHover] = useState(false)
  return (
    <Box className="company-box" onMouseEnter={() => setBoxHover(true)} onMouseLeave={() => setBoxHover(false)}>
      <Image src={image} className="icon" height={120} width={120} alt={title} />
      <label onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        {title}
        <Button label={label} hover={hover} style={{ opacity: boxHover ? 1 : 0 }} onClick={onClick} />
        <button onClick={(e) => e}></button>
      </label>
      <BoxIamge src={src} alt={title} width={720} height={400} />
    </Box>
  )
}

export default CompanyBox

const Box = styled.div`
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  flex-grow: 1;
  max-width: 720px;
  transition-duration: 0.5s;
  transition-property: flex-grow;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #202020;
    opacity: 1;
    transition-duration: 0.5s;
    transition-property: opacity;
  }
  :hover::after {
    opacity: 0.4;
  }
  :hover {
    flex-grow: 3;
  }

  label {
    color: white;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    gap: 8px;
    z-index: 10;

    font-family: var(--noto-sans-kr);
    text-align: center;
    font-size: 24px;
    font-weight: 400;
    transition: 0.5s font-size;
  }
  :hover {
    label {
      font-size: 40px;
      font-weight: 700;
    }
  }
`

const BoxIamge = styled(Image)`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
`
