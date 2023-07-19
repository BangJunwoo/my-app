import LocaleSwitcher from '@/components/i18n/locale-switcher'

type Props = {}

const Header = (props: Props) => {
  return (
    <header>
      <LocaleSwitcher />
      <nav></nav>
    </header>
  )
}

export default Header
