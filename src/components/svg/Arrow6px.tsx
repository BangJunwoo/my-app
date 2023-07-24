import React, { useState } from 'react'

type Props = {
  black: string
  white: string
  hover: boolean
  width?: string
  height?: string
}

const Arrow = ({ black = 'black', white = 'white', hover }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
      <path
        d="M5.66027 0.305371L2.04914 0.296387C1.58235 0.296064 1.21307 0.665368 1.21339 1.13218C1.21371 1.599 1.58351 1.96881 2.0503 1.96914L3.64516 1.97024L0.742711 4.87285C0.418777 5.1968 0.419145 5.72845 0.743528 6.05285C1.06791 6.37725 1.59953 6.37761 1.92347 6.05366L4.82592 3.15106L4.8335 4.73952C4.83382 5.20634 5.20362 5.57615 5.67041 5.57648C5.9038 5.57664 6.1112 5.48601 6.26021 5.337C6.40922 5.18798 6.50632 4.97409 6.49968 4.74716L6.49718 1.14232C6.49703 0.921885 6.4126 0.707871 6.2569 0.552158C6.10119 0.396446 5.8807 0.305524 5.66027 0.305371Z"
        fill={hover ? black : white}
      />
    </svg>
  )
}

export default Arrow
