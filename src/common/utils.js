export function debounce(fn,time=30) {
  let timer = null
  return function (...arge) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this,arge)
    },time)
  }
}