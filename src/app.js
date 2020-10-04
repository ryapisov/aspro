import './app.scss'
import {unite} from './utils'
import { header } from './sectionMain'
import { about } from './sectionAbout'
import { partners} from './sectionPartners'
import { contacts } from './sectionContacts'

const elem = document.querySelector('#root')
const html = unite(header(), about(), partners(), contacts())
elem.appendChild(html)
