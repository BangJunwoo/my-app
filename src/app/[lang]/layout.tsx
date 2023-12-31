/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import { i18n } from '@/../i18n-config'
import '@/design/preset/reset.css'
import Script from 'next/script'
import { crossJoin, AnyObject } from '@/model/utilities/arrayTool'
import Header from './(header)'

import { Locale } from '@/../i18n-config'

// const size = ['1024px', '768px', '1680px']

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

const Root = ({ children, params }: { children: React.ReactNode; params: { lang: Locale } }) => {
  console.log('lang 을 html 이든 , head 든 head에 추가해줘야한다 스크립트로 추가하는 것도 나쁘지 않아보임', params.lang)
  return (
    <>
      <Script id="gtm" strategy="beforeInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K8TJ543Z')`}
      </Script>
      <Script id="i18n" strategy="beforeInteractive">
        {`
;(()=>{document.querySelector('html').lang = '${params.lang}';})()


        `}
      </Script>
      <Script id="scrollTo">
        {`
;(()=>{document.scrollingElement?.scrollTo({ top: 0, behavior: 'auto'})
})()


        `}
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
      <Header lang={params.lang} />
    </>
  )
}

export default Root
