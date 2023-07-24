import React, { useState } from 'react'
import styles from './button.module.scss'
import Arrow from '../svg/Arrow6px'

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
  Icon?: any
  onClick?: () => void
  hover: boolean
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ backgroundColor, label, Icon = Arrow, hover, ...props }: ButtonProps) => {
  return (
    <button type="button" className={styles.button} {...props}>
      {label}
      <Icon black="black" white="white" hover={hover} width="6px" height="6px" />
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  )
}
