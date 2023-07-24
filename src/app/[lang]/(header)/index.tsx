import LocaleSwitcher from '@/components/i18n/locale-switcher'
import GNB from './GNB'
import styles from './header.module.scss'
import Logo from './Logo'
import hidden from '@/design/preset/hidden.module.css'
import { getDictionary } from 'get-dictionary'
import { Locale } from 'i18n-config'

type Props = {
  lang: Locale
}

const Header = async ({ lang }: Props) => {
  const dictionary = await getDictionary(lang)
  return (
    <header className={styles.wrap}>
      <div className={styles.header}>
        <h1>
          <a href={`/${lang}/`}>
            <Logo />
            <span className={hidden.realHidden}>{dictionary.header.title} </span>
          </a>
        </h1>
        <GNB lang={lang} dictionary={dictionary.header} />
        <LocaleSwitcher lang={lang} />
      </div>
    </header>
  )
}

export default Header
