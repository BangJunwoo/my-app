/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import { i18n } from '@/../i18n-config'
import Script from 'next/script'
import { crossJoin, AnyObject } from '@/model/utilities/arrayTool'

// const size = ['1024px', '768px', '1680px']

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
  // return crossJoin(i18n.locales, size)
}

const Root = ({ children, params }: { children: React.ReactNode; params: { lang: string } }) => {
  return (
    <html lang={params.lang}>
      <body>
        <Script id="gtm" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K8TJ543Z')`}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K8TJ543Z"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        {children}
      </body>
    </html>
  )
}

export default Root