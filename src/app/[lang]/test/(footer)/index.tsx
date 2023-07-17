'use client'

import { useState } from 'react'
import { goToId } from '@/model/utilities/viewAction'
type Props = {}

const Footer = (props: Props) => {
  const [count, setCount] = useState(1)
  return (
    <footer>
      index {count}
      <button onClick={() => setCount((state) => (state += 1))}>hello</button>
      {Array.from({ length: 10 }).map((item, index) => {
        return (
          <div key={`${index}${index}`} onClick={() => goToId(String(index))}>
            {index}
          </div>
        )
      })}
    </footer>
  )
}

export default Footer
