export const main = () => {
  const elem = document.createElement('main')
  const fragment = document.createDocumentFragment()
  fragment.appendChild(section())
  fragment.appendChild(section())
  fragment.appendChild(section())
  elem.appendChild(fragment)
  return elem
}

const section = () => {
  const section = document.createElement('section')
  return section
}