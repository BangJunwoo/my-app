import { useState, useEffect } from 'react'

function useWindowEvent(event: string, callback: EventListener) {
  useEffect(() => {
    // Skip on SSR
    if (typeof window === 'undefined') return () => {}
    window.addEventListener(event, callback)

    // Unsubscribe on disposal
    return () => window.removeEventListener(event, callback)
  }, [event, callback])
}

export function useUrlHash(): string {
  const [urlHash, setUrlHash] = useState(typeof window !== 'undefined' ? window.location.hash.slice(1) : '')

  useWindowEvent('hashchange', () => {
    if (urlHash === window.location.hash.slice(1)) return
    setUrlHash(window.location.hash.slice(1))
  })
  return urlHash || ''
}

// hash 제외 나머지는 utilities 로 가서 확인
