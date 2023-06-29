import './nextGlobals.scss'
// import { Inter } from 'next/font/google'
import '@/global/reset.css'

// const inter = Inter({ subsets: ['latin'] })

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
