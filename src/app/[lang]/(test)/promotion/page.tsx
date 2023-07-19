import React from 'react'
import { FAQ } from '@/components/details/FAQ'

type Props = {}

const Promotion = (props: Props) => {
  return (
    <>
      <h2>type 2.</h2>
      <p>아이콘 전용 폰트를 만들던지, 아이콘을 넣던지</p>
      <FAQ title="제목 영역">Something small enough to escape casual notice.</FAQ>
    </>
  )
}

export default Promotion
