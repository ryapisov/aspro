import {
   showImageLogo,
   showLayerBanner,
   showLayerTriangles,
   showLayerTextual
}  from './templates' 

import {createSection, createTag} from '../utils'

export const header = () => {
   return createSection(head(), body())
}

function head(){
   return createTag('div', 'header',
     showImageLogo(),
   )
}


function body(){
   return createTag('div', 'content',
     showLayerBanner(),
     showLayerTriangles(),
     showLayerTextual()
   )
}