'use client'

import styles from './subNav.module.scss'
import useViewObserver from '@/model/Hooks/useObserver'
import ko from '@/../dictionaries/ko'
import { useEffect } from 'react'
export type Dictionary = typeof ko.about.subNav

type Props = {
  dictionary: Dictionary
}

const array = ['landing', 'company', 'history', 'technology', 'stepin'] as const
const hidden = ['landing', 'stepin']
const inverse = ['company', 'history']

const SubNav = ({ dictionary }: Props) => {
  const text = useViewObserver(['landing', 'company', 'history', 'technology', 'stepin'])

  useEffect(() => {
    // 보이는 상태 면 필요한 속성 적용
    const target = document.querySelector(`.${styles.nav}`)

    if (target) {
      target.classList.remove(styles.inverse)
      target.classList.remove(styles.hidden)

      if (hidden.includes(text)) {
        target.classList.add(styles.hidden)
      }
      if (inverse.includes(text)) {
        target.classList.add(styles.inverse)
      }
    }
  }, [text])

  return (
    <aside className={styles.nav}>
      {array.map((text) => {
        return (
          <a href={`#${text}`} id={`side-${text}`} key={text}>
            {dictionary[text]}
          </a>
        )
      })}
    </aside>
  )
}

export default SubNav
