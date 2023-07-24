import 'server-only'
import './page.scss'
import Landing from './(landing)'
import SubNav from './SubNav'

import styles from './layout.module.scss'
import pageStyle from './page.module.scss'

import VideoComp from '@/components/videoWrap/FullScreenVideoWrap'

import { getDictionary } from '@/../get-dictionary'
import { Locale } from '@/../i18n-config'
import { Metadata, ResolvingMetadata } from 'next'
import Company from './(company)'

type Props = {
  params: { lang: Locale }
}

export async function generateStaticParams() {
  return [{ lang: 'ko' }, { lang: 'en' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const dictionary = await getDictionary(params.lang)

  return {
    title: dictionary.about.metadata.title,
    description: dictionary.about.metadata.description,
  }
}

const page = async ({ params }: Props) => {
  const dictionary = await getDictionary(params.lang)
  return (
    <main>
      <SubNav dictionary={dictionary.about.subNav} />
      <div className={pageStyle.landing}>
        <Landing />
        <VideoComp src="/video/STEPIN.mp4" />
      </div>

      <Company />
      <h2 id="history" className={styles.h2}>
        {dictionary.about.subNav.history}
      </h2>

      <h2 id="technology" className={styles.h2}>
        {dictionary.about.subNav.technology}
      </h2>

      <h2 id="stepin" className={styles.h2}>
        {dictionary.about.subNav.stepin}
      </h2>
    </main>
  )
}

export default page
