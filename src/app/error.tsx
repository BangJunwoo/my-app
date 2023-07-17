'use client'

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <div onClick={reset}>error : {String(error)}</div>
      <div onClick={reset}>reset : {String(reset)}</div>
    </div>
  )
}
export default Error
