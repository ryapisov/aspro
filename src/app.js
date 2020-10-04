import './app.scss'
import { unite } from './utils'
import { main } from './sectionMain'
import { about } from './sectionAbout'
import { partners} from './sectionPartners'
import { contacts } from './sectionContacts'

const elem = document.querySelector('#root')
const html = unite(main(), about(), partners(), contacts())
elem.appendChild(html)
