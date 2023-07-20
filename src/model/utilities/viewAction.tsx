export const goToId = (hash: string) => {
  const target = document.getElementById(hash)
  goToElement(target)
}

export const goToElement = (target: Element | null) => {
  if (target) {
    const top = target.getBoundingClientRect().top - 80
    document.scrollingElement?.scrollBy({ top, behavior: 'smooth' })
  }
}

export const scrollTo = (top: number, smooth: boolean) => {
  document.scrollingElement?.scrollTo({ top, behavior: smooth ? 'smooth' : 'auto' })
}
