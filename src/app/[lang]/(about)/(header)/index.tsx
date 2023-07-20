import LocaleSwitcher from '@/components/i18n/locale-switcher'
import GNB from './GNB'
import styles from './header.module.scss'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className={styles.wrap}>
      <div className={styles.header}>
        <h1>사이드워크</h1>
        <GNB />
        <LocaleSwitcher />
      </div>
    </header>
  )
}

export default Header
