import {heading, content} from './templates'

export const header = () => {
  const elem = document.createElement('header')
  
  elem.insertAdjacentHTML('beforeend', heading() )
  elem.insertAdjacentHTML('beforeend', content() )
  return elem
}
