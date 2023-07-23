import { useState, useEffect } from 'react'

// 애플 스크롤 호환 방식
// 스크롤 위치를 통한 방향 측정
function useWindowEvent(event: string, callback: EventListener) {
  useEffect(() => {
    // Skip on SSR
    if (typeof window === 'undefined') return () => {}
    window.addEventListener(event, callback, { passive: true })
    return () => window.removeEventListener(event, callback)
  }, [event, callback])
}

export type Direction = 'hold' | 'up' | 'down'

type UseScroll = (scrollingElement: Element | null) => [Scroll, Direction]
type Scroll = number

let lastScroll = 0
let timmer = setTimeout(() => {})
export const useScroll: UseScroll = (scrollingElement) => {
  const [scroll, setScroll] = useState(0)
  const [direction, setDirection] = useState<Direction>('hold')

  if (scrollingElement === null) return [0, 'hold']
  useWindowEvent('scroll', (event) => {
    setScroll(scrollingElement.scrollTop)
    if (lastScroll > scrollingElement.scrollTop) setDirection('up')
    if (lastScroll < scrollingElement.scrollTop) setDirection('down')
    if (lastScroll === scrollingElement.scrollTop) setDirection('hold')
    lastScroll = scrollingElement.scrollTop
    if (timmer) {
      clearTimeout(timmer)
      timmer = setTimeout(() => {
        setDirection('hold')
      }, 100)
    }
  })
  return [scroll, direction]
}
