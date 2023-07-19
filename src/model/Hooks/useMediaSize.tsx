import { useEffect, useState } from 'react'
import useWindowResize from './useBodyResize'

type UseMediaSize = (a: number, b: number, c: number) => boolean[]

const useMediaSize: UseMediaSize = (a = 576, b = 768, c = 1024) => {
  const [width, height] = useWindowResize()
  const [data, setData] = useState<boolean[]>([])
  useEffect(() => {
    const isMobile = width < a
    const isTablet = a <= width && width < b
    const isDesktop = b <= width && width < c
    const isWide = c <= width
    setData([isMobile, isTablet, isDesktop, isWide])
    // if (typeof window !== 'undefined') console.log('devicePixelRatio: ', window.devicePixelRatio, width)
  }, [width])

  return [...data]
}

export default useMediaSize
