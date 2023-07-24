'use client'
import { useEffect, useState } from 'react'
import useWheel from '@/model/Hooks/useHeaderWheel'
import hidden from '@/design/preset/hidden.module.css'

let timmer = setTimeout(() => {})
/**
 * scroll event 테스트
 */
const Header = () => {
  const [x, xDirection] = useWheel(typeof document !== 'undefined' ? document.scrollingElement : null)

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

  return null
}

export default Header
