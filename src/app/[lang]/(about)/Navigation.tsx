'use client'

import { useUrlHash } from '@/model/Hooks/useUrlHash'
import { useEffect } from 'react'
import { goToId, goToElement, scrollTo } from '@/model/utilities/viewAction'

/**
 * 해시 경로 변경 시 찾아가도록하는 useEffect
 * @returns
 */
const Navigation = () => {
  const hash = useUrlHash()
  useEffect(() => {
    const target = document.getElementById(hash)
    // console.log('router', hash, target)
    if (hash) {
      //target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      goToElement(target)
    } else {
      scrollTo(0, true)
    }
  }, [hash])

  return null
}

export default Navigation
