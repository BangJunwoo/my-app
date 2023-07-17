'use client'

import { useUrlHash } from '@/model/Hooks/useUrlHash'
import { useEffect } from 'react'
import { goToId, goToElement } from '@/model/utilities/viewAction'

const Navigation = () => {
  const hash = useUrlHash()
  useEffect(() => {
    const target = document.getElementById(hash)
    // console.log('router', hash, target)
    if (hash) {
      //target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      goToElement(target)
    }
  }, [hash])

  return null
}

export default Navigation
