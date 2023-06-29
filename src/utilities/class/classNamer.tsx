import { SyntheticEvent } from 'react'

export const isClass = (disabled: unknown) => {
  let result: string[] = []
  if (disabled) result.push('disabled')

  console.log('result', result)
  return result.filter((v, i) => result.indexOf(v) === i).join(' ')
}

export const pushEmpty = (target: HTMLInputElement) => {
  if (target.value === '') {
    target.classList.add('empty')
  } else {
    target.classList.remove('empty')
  }
}
