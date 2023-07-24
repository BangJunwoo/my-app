import { NotoSans } from '@/design/preset/fonts'
import type { Locale } from 'i18n-config'

export async function generateStaticParams() {
  return [{ lang: 'ko' }, { lang: 'en' }]
}

const Root = ({ children, params }: { children: React.ReactNode; params: { lang: Locale } }) => {
  return (
    <html lang={params.lang}>
      <body className={NotoSans.variable}>{children}</body>
    </html>
  )
}

export default Root
