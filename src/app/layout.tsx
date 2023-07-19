import { i18n } from '@/../i18n-config'
import './nextGlobals.scss'

// const size = ['1024px', '768px', '1680px']

const Root = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}

export default Root
