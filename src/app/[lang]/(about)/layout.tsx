import '@/design/preset/reset.css'
import { getDictionary } from '@/../get-dictionary'
import type { Locale } from '@/../i18n-config'

import './layout.scss'
import Navigation from './Navigation'
// import Header from './Header'
import Header from './(header)'

import Link from 'next/link'

export const metadata = {
  title: '제목',
  description: 'Generated by create next app',
}

// 전부 공유 되야하는 컴포넌트임
// header와 footer , 메타데이터, og

type Props = { params: { lang: Locale }; children: React.ReactNode }

const RootLayout = async ({ params: { lang }, children }: Props) => {
  return (
    <>
      <Navigation />
      <Header />
      <Link href="/test">바로가기</Link>
      {children}
    </>
  )
}

export default RootLayout
