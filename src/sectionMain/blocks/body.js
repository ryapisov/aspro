// import banner from '../../images/banner_min.jpg'
// import iconPhone from '../../images/phone.svg'
// import iconEmail from '../../images/email.svg'
// import {createTag} from '../../utils'

// export const body = () => {
//   return createTag('div', 'content',
//     showLayerBanner(),
//     showLayerTriangles(),
//     showLayerTextual()
//   )
// }

// function showLayerBanner() {
//   return `
//     <div class=${'layer-banner'}>
//       <img src=${banner} class="logo" alt="${'строительная компания aspro'}" />
//     </div>
//   `
// }

// function showLayerTriangles() {
//   return `
//     <div class=${'layer-triangles'}>
//       <div class=${'upper-triangle'}></div>
//       <div class=${'lower-triangle'}></div>
//       <div class=${'right-triangle'}></div>
//       <div class=${'left-triangle'}></div>
//       <div class=${'long-line'}></div>
//       <div class=${'short-line'}></div>
//     </div>
//   `
// }

// function showLayerTextual() {
//   return `
//     <div class=${'layer-text'}>
//       <div class=${'contact'}>
//         <h1>ООО "СК&nbsp; АСПРО"</h1>
//         <span class="address">109382, г.Москва, ул. Люблинская, д.141, оф.424 </span>
//         <div class="phone">
//           <img src="${iconPhone}" alt="" />
//           +7(499) 964-46-70 
//         </div>
//         <div class="email">
//           <img src="${iconEmail}" alt="" />
//           info@sk-aspro.ru 
//         </div>
//       </div>
//       <div class=${'menu'}></div>
//     </div>
//   `
// }