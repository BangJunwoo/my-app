'use client'
import { useEffect, useState } from 'react'
import { useScroll } from '@/model/Hooks/useScroll'
import useWheel from '@/model/Hooks/useHeaderWheel'
import useWindowResize from '@/model/Hooks/useBodyResize'
import useMediaSize from '@/model/Hooks/useMediaSize'

import hidden from '@/design/preset/hidden.module.css'

let timmer = setTimeout(() => {})
/**
 * scroll event 테스트
 */
const Header = () => {
  const [scroll, direction] = useScroll(typeof document !== 'undefined' ? document.scrollingElement : null)
  const [width, height] = useWindowResize()
  const [x, xDirection] = useWheel(typeof document !== 'undefined' ? document.scrollingElement : null)
  const [isMobile, isTablet, isDesktop, isWide] = useMediaSize(576, 768, 1024)

  useEffect(() => {
    if (xDirection === 'up') {
      document.querySelectorAll('header').forEach((e) => e.classList.remove(hidden.hidden))

      if (timmer) {
        clearTimeout(timmer)
        timmer = setTimeout(() => {
          document.querySelectorAll('header').forEach((e) => e.classList.remove(hidden.realHidden))
        })
      }
    }
    if (xDirection === 'down') {
      document.querySelectorAll('header').forEach((e) => e.classList.add(hidden.hidden))
      if (timmer) {
        clearTimeout(timmer)
        timmer = setTimeout(() => {
          document.querySelectorAll('header').forEach((e) => e.classList.add(hidden.realHidden))
        }, 300)
      }
    }
  }, [xDirection])

  return (
    <>
      {/* <div className={styles.header} style={{ left: '0' }}>
        isMobile: {String(isMobile)} <br /> isTablet: {String(isTablet)} <br /> isDesktop: {String(isDesktop)} <br />{' '}
        isWide : {String(isWide)}
      </div>
      <div className={styles.header} style={{ left: '200px' }}>
        스크롤 : {scroll} <br /> 방향 : {direction}
      </div>
      <div className={styles.header} style={{ left: '400px' }}>
        스크롤 : {x} <br /> 방향 : {xDirection}
      </div>

      <div className={styles.header} style={{ left: '600px' }}>
        width : {width} <br /> height : {height}
      </div> */}
    </>
  )
}

export default Header
