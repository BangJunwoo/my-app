'use client'

import { useEffect } from 'react'
import { usePathname, useParams, useSearchParams } from 'next/navigation'
import { scrollTo } from '@/model/utilities/viewAction'

const ExampleClientComponent = () => {
  const pathname = usePathname()
  const params = useParams()
  const searchParams = useSearchParams()
  console.log('로직 실행 횟수')
  useEffect(() => {
    console.log('pathname 변경됨', pathname)
    scrollTo(0, false)
  }, [pathname, searchParams, params])

  return null
}

export default ExampleClientComponent
