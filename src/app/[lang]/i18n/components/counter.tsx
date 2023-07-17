'use client'

import { useState } from 'react'
const Counter = ({
  dictionary,
}: {
  dictionary: {
    increment: string
    decrement: string
  }
}) => {
  const [count, setCount] = useState(0)
  return (
    <p>
      This compoment is rendered on client:{' '}
      <button onClick={() => setCount((n) => n - 1)}>{dictionary.decrement}</button> {count}{' '}
      <button onClick={() => setCount((n) => n + 1)}>{dictionary.increment}</button>
    </p>
  )
}

export default Counter
