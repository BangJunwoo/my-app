import React, { useState } from 'react'
import styles from './button.module.scss'
import Arrow from '../svg/Arrow'

interface ButtonProps {
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * How large should the button be?
   */

  label: string
  /**
   * Optional click handler
   */
  Icon: any
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ backgroundColor, label, Icon = Arrow, ...props }: ButtonProps) => {
  const [hover, setHover] = useState(false)

  return (
    <button
      type="button"
      className={styles.button}
      {...props}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {label}
      <Icon black="black" white="white" hover={hover} />
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  )
}
