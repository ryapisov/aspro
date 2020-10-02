import '../scss/index.scss'
import { header } from './components/header/index'
import { footer } from './components/footer/index'
import { main   } from './components/main/index'

const appEl = document.querySelector('#root')
const fragment = document.createDocumentFragment()

fragment.appendChild(header())
fragment.appendChild(main())
fragment.appendChild(footer())
appEl.appendChild(fragment)