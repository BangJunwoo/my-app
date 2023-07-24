'use client'

import styles from './subNav.module.scss'
import useViewObserver from '@/model/Hooks/useObserver'

type Props = {}

const SubNav = (props: Props) => {
  useViewObserver(['landing', 'company', 'history', 'technology', 'stepin'])

  return (
    <aside className={styles.nav}>
      <a href="#landing" id="side-landing">
        Landing
      </a>
      <a href="#company" id="side-company">
        company
      </a>
      <a href="#history" id="side-history">
        history
      </a>
      <a href="#technology" id="side-technology">
        Technology
      </a>
      <a href="#stepin" id="side-stepin">
        stepin
      </a>
    </aside>
  )
}

export default SubNav
