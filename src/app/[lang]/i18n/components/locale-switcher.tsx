'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { i18n } from '@/../i18n-config'

type Props = {}
/**
 * 현재 경로에서 언어를 변경하기 위한 컴포넌트다 네비게이션에 추가되는 것으로 적합함
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
    <div>
      <p>Locale switcher:</p>
      <ul>
        {i18n.locales.map((locale) => {
          return (
            <li key={locale}>
              <Link href={redirectedPathName(locale)}>{locale}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default LocaleSwitcher
