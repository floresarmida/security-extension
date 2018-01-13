export default function addGlobalStyle (css) {
  let head
  let style
  head = document.getElementsByTagName('head')[0]
  if (!head) { return }
  style = document.createElement('style')
  style.type = 'text/css'
  style.innerHTML = css.replace(/;/g, ' !important;')
  head.appendChild(style)
}
