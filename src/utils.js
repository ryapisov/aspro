
export const createTag = (tag, classes, ...elems) => {
  if(!tag || !isNaN(tag)) return null
  const elemTag = document.createElement(tag)
  if (classes && isNaN(classes)) elemTag.classList.add(classes)
  if (elems.length == 0) return elemTag
  elems.forEach(elem => elemTag.insertAdjacentHTML('beforeend', elem))
  return elemTag.outerHTML
}

export const createSection = (...htmls) => {
  const section = document.createElement('section')
  htmls.forEach((html) => section.insertAdjacentHTML('beforeend', html ))
  return section
}

export const unite = (...slices) => {
  const fragment = document.createDocumentFragment()
  slices.forEach(slice => fragment.appendChild(slice))
  return fragment
}