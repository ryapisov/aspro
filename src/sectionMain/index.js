import {head} from './blocks/head'
import {body} from './blocks/body'
import {createSection} from '../utils'

export const header = () => {
   return createSection(head(), body())
}
