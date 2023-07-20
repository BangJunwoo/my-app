'use client'
import { useState } from 'react'
import { useScroll } from '@/model/Hooks/useScroll'
import useWheel from '@/model/Hooks/useWheel'
import useWindowResize from '@/model/Hooks/useBodyResize'
import useMediaSize from '@/model/Hooks/useMediaSize'

import styles from './header.module.scss'

/**
 * scroll event 테스트
 */
const Header = () => {
  const [scroll, direction] = useScroll(typeof document !== 'undefined' ? document.scrollingElement : null)
  const [width, height] = useWindowResize()
  const [x, xDirection] = useWheel(typeof document !== 'undefined' ? document.scrollingElement : null)
  const [isMobile, isTablet, isDesktop, isWide] = useMediaSize(576, 768, 1024)

  const Media = () => {
    if (isMobile) return '모바일'
    if (isTablet) return '테블릿'
    if (isDesktop) return '컴퓨터'
    if (isWide) return '와이드'
    return null
  }

  return (
    <>
      <header className={styles.header} style={{ left: '0' }}>
        isMobile: {String(isMobile)} <br /> isTablet: {String(isTablet)} <br /> isDesktop: {String(isDesktop)} <br />{' '}
        isWide : {String(isWide)}
        <p>{Media()}</p>
      </header>
      <header className={styles.header} style={{ left: '200px' }}>
        스크롤 : {scroll} <br /> 방향 : {direction}
      </header>
      <header className={styles.header} style={{ left: '400px' }}>
        스크롤 : {x} <br /> 방향 : {xDirection}
      </header>

      <header className={styles.header} style={{ left: '600px' }}>
        width : {width} <br /> height : {height}
      </header>
    </>
  )
}

export default Header
