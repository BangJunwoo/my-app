export const isString = (value: any): value is string => {
  return typeof value === 'string'
}

export const isNumber = (value: any): value is number => {
  return typeof value === 'number'
}

// 기본값을 반환해야하는지 여부를 파악하는 함수명
/**
 * R값을 위해 h값에 사용됨
 * @param value
 * @returns
 */
export const defaultToNumber = (value: any): number => {
  if (isString(value)) {
    return Number.parseFloat(value)
  }

  if (isNumber(value)) {
    return value
  }

  return 1
}
