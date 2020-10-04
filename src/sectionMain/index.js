import {createSectionFrom, createTag} from '../utils'
import {
   showImageLogo, showBanner,showTriangles, showContacts
}  from './templates' 

// Creating a section
export const main = () => createSectionFrom( header(), body())

// upper part of the section
const header = () => createTag('div', 'main-header', showImageLogo() )

// down part of the section
const body = () => createTag('div', 'main-body', 
     showBanner(),
     showTriangles(),
     showContacts()
   )