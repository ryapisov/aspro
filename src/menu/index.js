import { createTag} from '../utils'
import { showMenu } from './templates' 

// Creating a section
export const menu = () => createSectionFrom( menu_() )

// upper part of the section
const menu_ = () => createTag('nav', 'menu', showMenu() )

// === CREATE SELECTOR
const createSectionFrom = (...htmls) => {
  const section = document.createElement('section')
  htmls.forEach((html) => {
    section.insertAdjacentHTML('beforeend', html )
    section.classList.add('menu-section')
  })
  return section
}





// // Creating 
// export const menu = () => createDivFrom (  menu1()   )

// const menu1 = () => createTag('nav', 'menu',  showMenu() )

// // === 
// export const createDivFrom = (...htmls) => {
//   const div = document.createElement('span')
//   htmls.forEach((html) => div.insertAdjacentHTML('beforeend', html ))
//   return div
// }
