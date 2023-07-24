import React, { useState } from 'react'

type Props = {
  black: string
  white: string
  hover: boolean
  width?: string
  height?: string
}

const Arrow = ({ black = 'black', white = 'white', hover, width = '12', height = '13' }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 12 13" fill="none">
      <path
        d="M10.3205 0.517969L3.09828 0.5C2.16471 0.499354 1.42614 1.23796 1.42678 2.17159C1.42743 3.10522 2.16702 3.84485 3.1006 3.8455L6.29032 3.84771L0.485422 9.65292C-0.162447 10.3008 -0.161711 11.3641 0.487055 12.0129C1.13582 12.6617 2.19906 12.6625 2.84693 12.0146L8.65183 6.20934L8.667 9.38628C8.66765 10.3199 9.40724 11.0595 10.3408 11.0602C10.8076 11.0605 11.2224 10.8793 11.5204 10.5812C11.8184 10.2832 12.0126 9.85541 11.9994 9.40155L11.9944 2.19188C11.9941 1.751 11.8252 1.32297 11.5138 1.01154C11.2024 0.700119 10.7614 0.518274 10.3205 0.517969Z"
        fill={hover ? black : white}
      />
    </svg>
  )
}

export default Arrow
