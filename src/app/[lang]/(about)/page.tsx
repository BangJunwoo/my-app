'use client'

import Landing from './(landing)'
import SubNav from './SubNav'
import { useRouter } from 'next/navigation'
import { goToId } from '@/model/utilities/viewAction'
import styles from '@/app/[lang]/test/layout.module.scss'

import VideoComp from '@/components/videoWrap/FullScreenVideoWrap'

type Props = {}

const page = (props: Props) => {
  const router = useRouter()
  return (
    <main>
      <SubNav />

      <Landing />
      <VideoComp src="/video/STEPIN.mp4" />

      <h2 id="technology" className={styles.h2}>
        technology
      </h2>
      <h2 id="history" className={styles.h2}>
        history
      </h2>
      <h2 id="company" className={styles.h2}>
        company
      </h2>
    </main>
  )
}

export default page
