/**
 * scroll 인터랙션 값이 반응을 시작해야하는 스크롤 위치
 * @param start
 * @param end
 * @returns
 */
export const opacityApply = (start: number, end: number) => {
  const sum = end - start

  return (top: number, max: number, min?: number) => {
    min = min || 0
    const cursor = top - start
    // console.log('이동되야할 스크롤 전체 영역 :', sum)
    // console.log('현재 위치:', top)
    // console.log('start 대비 커서', cursor)
    // console.log('max 커서 환산 비율', (cursor / sum) * max)

    const result = (cursor / sum) * max

    if (result > min && result < max) {
      return result
    } else if (result < min) {
      return min
    } else if (result > max) {
      return max
    }
  }
}
