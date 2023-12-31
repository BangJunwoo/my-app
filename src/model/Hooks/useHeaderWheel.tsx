import { useState, useEffect } from 'react'

// 애플 호환 방식
// 스크롤 위치를 통한 방향 측정
interface EventListener {
  (evt: WheelEvent): void
}

function useWindowEvent(event: 'wheel', callback: EventListener) {
  useEffect(() => {
    // Skip on SSR
    if (typeof window === 'undefined') return () => {}
    window.addEventListener(event, callback, { passive: true })

    return () => window.removeEventListener(event, callback)
  }, [event, callback])
}

export type Direction = 'up' | 'down'

type UseWhell = (scrollingElement: Element | null) => [Scroll, Direction]
type Scroll = number

let count = 0
let lastScroll = 0
let timmer = setTimeout(() => {})
const useWheel: UseWhell = (scrollingElement) => {
  const [wheeel, setWhell] = useState(0)
  const [direction, setDirection] = useState<Direction>('up')

  if (scrollingElement === null) return [0, 'up']
  useWindowEvent('wheel', (event) => {
    setWhell(event.deltaY)
    if (0 > event.deltaY) setDirection('up')
    if (0 < event.deltaY) setDirection('down')

    lastScroll = wheeel

    // if (timmer) {
    //   clearTimeout(timmer)
    //   timmer = setTimeout(() => {
    //     setWhell(0)
    //   }, 100)
    // }
  })
  return [wheeel, direction]
}

export default useWheel
