import { i18n } from '@/../i18n-config'

export const getUserLang = () => {
  // server에서 미리 리디렉션 페이지를 만들 수 없기 때문에 소용 없었다
  if (typeof window === 'undefined') return ''
  const value = window.localStorage.getItem('lang') || 'ko'
  if (value === undefined) {
    window.localStorage.setItem('lang', i18n.defaultLocale)
    return i18n.defaultLocale
  }

  return value
}

export const setUserLang = (lang: string) => {
  console.log('setUserLang1')
  if (typeof window === 'undefined') return
  console.log('setUserLang2')
  window.localStorage.setItem('lang', lang)
}
