import { i18n } from '@/../i18n-config'
import './nextGlobals.scss'
import '@/design/preset/reset.css'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

const Root = ({ children, params }: { children: React.ReactNode; params: { lang: string } }) => {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  )
}

export default Root
