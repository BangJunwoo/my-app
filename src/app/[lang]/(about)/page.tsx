'use client'

import Landing from './(landing)'
import SubNav from './SubNav'

import styles from '@/app/[lang]/test/layout.module.scss'
import pageStyle from './page.module.scss'

import VideoComp from '@/components/videoWrap/FullScreenVideoWrap'
import './page.scss'

type Props = {}

const page = (props: Props) => {
  return (
    <main>
      <SubNav />
      <div className={pageStyle.landing}>
        <Landing />
        <VideoComp src="/video/STEPIN.mp4" />
      </div>

      <h2 id="company" className={styles.h2}>
        company
      </h2>
      <h2 id="history" className={styles.h2}>
        history
      </h2>

      <h2 id="technology" className={styles.h2}>
        technology
      </h2>

      <h2 id="stepin" className={styles.h2}>
        stepin
      </h2>
    </main>
  )
}

export default page
