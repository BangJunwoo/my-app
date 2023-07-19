import { useState, useEffect } from 'react'

const useReSize = () => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const ro = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const cr = entry.contentRect
        setWidth(cr.width)
        setHeight(cr.height)
      }
    })
    ro.observe(document.body)
  }, [])

  return [width, height]
}

export default useReSize
