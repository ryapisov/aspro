import './app.scss'
import { header } from './sectionMain'
import { about } from './sectionAbout'
import { partners} from './sectionPartners'
import { contacts } from './sectionContacts'

const elem = document.querySelector('#root')
const html = unite(header(), about(), partners(), contacts())
elem.appendChild(html)

function unite(...slices){
  const fragment = document.createDocumentFragment()
  slices.forEach(slice => {
    fragment.appendChild(slice)
  })
  
  return fragment
}