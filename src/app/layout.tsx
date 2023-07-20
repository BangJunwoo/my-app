import { NotoSans } from '@/design/preset/fonts'

const Root = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body className={NotoSans.variable}>{children}</body>
    </html>
  )
}

export default Root
