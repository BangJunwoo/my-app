import { useState, useEffect } from 'react'
import styles from '@/app/[lang]/(about)/subNav.module.scss'

const useViewObserver = (array: string[]) => {
  useEffect(() => {
    const ro = new IntersectionObserver((entries) => {
      for (let entry of entries) {
        if (entry.isIntersecting) {
          const active = entry.target.id

          document.getElementById(`nav-${active}`)?.classList.add(styles.active)
          document.getElementById(`side-${active}`)?.classList.add(styles.active)

          array.forEach((text) => {
            if (active === text) return
            document.getElementById(`nav-${text}`)?.classList.remove(styles.active)
            document.getElementById(`side-${text}`)?.classList.remove(styles.active)
          })
        }
      }
    })

    array.forEach((text) => {
      const target = document.getElementById(text)
      if (target) ro.observe(target)
    })
  }, [array])

  return null
}

export default useViewObserver
