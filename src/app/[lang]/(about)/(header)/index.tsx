import LocaleSwitcher from '@/components/i18n/locale-switcher'
import GNB from './GNB'
import styles from './header.module.scss'
import Logo from './Logo'
import hidden from '@/design/preset/hidden.module.css'
import { useParams } from 'next/navigation'

type Props = {
  lang: string
}

const Header = ({ lang }: Props) => {
  return (
    <header className={styles.wrap}>
      <div className={styles.header}>
        <h1>
          <a href={`/${lang}/`}>
            <Logo />
            <span className={hidden.realHidden}>싸이드워크엔터테인먼트</span>
          </a>
        </h1>
        <GNB />
        <LocaleSwitcher />
      </div>
    </header>
  )
}

export default Header
