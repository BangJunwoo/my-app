'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { i18n } from '@/../i18n-config'
import styles from './locale.module.scss'

type Props = {}
/**
 * 현재 경로에서 언어를 변경하기 위한 컴포넌트 네비게이션에 추가되는 것으로 적합함
 * @param props
 * @returns
 */
const LocaleSwitcher = (props: Props) => {
  const pathName = usePathname()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <ul className={styles.warp}>
      <li>
        <Link className={styles.link} href={redirectedPathName('ko')}>
          KOR
        </Link>
      </li>
      <li>
        <Link className={styles.link} href={redirectedPathName('en')}>
          ENG
        </Link>
      </li>
    </ul>
  )
}

export default LocaleSwitcher
