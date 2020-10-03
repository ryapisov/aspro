import logo from '../../../img/aspro_min.jpg'
import banner from '../../../img/banner_min.jpg'
import iconPhone from '../../../img/phone.svg'
import iconEmail from '../../../img/email.svg'


export const heading = () => {
  return `
    <div class="heading">
      <img src=${logo} class="logo" alt="${'строительная компания aspro'}" />
    </div>
  `
}

export const content = () => {
  const $divElem = document.createElement('div')
  $divElem.classList.add('content')
  $divElem.insertAdjacentHTML('beforeend', showLayerBanner())
  $divElem.insertAdjacentHTML('beforeend', showLayerTriangles())
  $divElem.insertAdjacentHTML('beforeend', showLayerText())

  function showLayerBanner() {
    return `
      <div class=${'layer-banner'}>
        <img src=${banner} class="logo" alt="${'строительная компания aspro'}" />
      </div>
    `
  }

  function showLayerTriangles() {
    return `
      <div class=${'layer-triangles'}>
        <div class=${'upper-triangle'}></div>
        <div class=${'lower-triangle'}></div>
        <div class=${'right-triangle'}></div>
        <div class=${'left-triangle'}></div>
        <div class=${'long-line'}></div>
        <div class=${'short-line'}></div>
      </div>
    `
  }

  function showLayerText() {
    return `
      <div class=${'layer-text'}>
        <div class=${'contact'}>
          <h1>ООО "СК&nbsp; АСПРО"</h1>
          <span class="address">109382, г.Москва, ул. Люблинская, д.141, оф.424 </span>
          <div class="phone">
            <img src="${iconPhone}" alt="" />
            +7(499) 964-46-70 
          </div>
          <div class="email">
            <img src="${iconEmail}" alt="" />
            info@sk-aspro.ru 
          </div>
        </div>
        <div class=${'menu'}></div>
      </div>
    `
  }

  return $divElem.outerHTML
}