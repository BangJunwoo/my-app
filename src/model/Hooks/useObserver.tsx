import { useState, useEffect } from 'react'
import styles from '@/app/[lang]/(about)/subNav.module.scss'

const useViewObserver = (array: string[]) => {
  const [value, setValue] = useState('')
  useEffect(() => {
    const ro = new IntersectionObserver((entries) => {
      for (let entry of entries) {
        if (entry.isIntersecting) {
          // 활성화 된 것을 찾기
          const active = entry.target.id

          document.getElementById(`nav-${active}`)?.classList.add(styles.active)
          document.getElementById(`side-${active}`)?.classList.add(styles.active)

          array.forEach((text) => {
            if (active === text) return setValue(text)
            document.getElementById(`nav-${text}`)?.classList.remove(styles.active)
            document.getElementById(`side-${text}`)?.classList.remove(styles.active)
          })
        }
      }
    })

    // 검색해야할 것들을 등록
    array.forEach((text) => {
      const target = document.getElementById(text)
      if (target) ro.observe(target)
    })
  }, [array])

  return value
}

export default useViewObserver
