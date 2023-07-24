import 'server-only'
import { i18n, Locale } from './i18n-config'

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => import('./dictionaries/en.js').then((module) => module.default),
  // ko: () => import('./dictionaries/en.js').then((module) => module.default),
  // en: () => import('./dictionaries/ko.js').then((module) => module.default),
  ko: () => import('./dictionaries/ko.js').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => {
  if (i18n.locales.includes(locale)) return dictionaries[locale]()
  else return dictionaries[i18n.defaultLocale]()
}

// ;(async () => {
//   ;(await getDictionary('ko'))['server-component']
// })()
