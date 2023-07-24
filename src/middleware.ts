import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

import { i18n } from '../i18n-config'

import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {}

  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales

  // 그냥 로컬 스토리지에 저장해놓고 가져오자
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(locales)
  console.log('languages', languages)
  const locale = matchLocale(languages, locales, i18n.defaultLocale)

  console.log('locale', locale)

  return locale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  console.log('middleware request path', pathname)

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )
  // 404는 /en/1234 를 해도
  // Invariant: dynamic responses cannot be unchunked. This is a bug in Next.js 에러로
  // 실질적으로 /404에서 리디렉션 되면서 locale이 초기화 되는 문제가 있음
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)

    return NextResponse.redirect(new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url))
  }
}

export const config = {
  matcher: ['/((?!api|image|video|_next/static|_next/image|favicon.ico).*)'],
}
