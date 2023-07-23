'use client'
import React from 'react'
//임시로 styled와 use client 사용 >> 서버 사이드를 위한 module.scss 사용으로 변환 필요
import styled from 'styled-components'
import styles from './page.module.scss'

type Props = {}

const page = (props: Props) => {
  return (
    <main className={styles.main}>
      <p>테스트를 위한 스크롤 페이지</p>
      <p>hee</p>
      <p>hee</p>
    </main>
  )
}

export default page
