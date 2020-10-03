import logo from '../../../img/aspro_min.jpg'
import banner from '../../../img/banner_min.jpg'

export const header = () => {
  const $elem = document.createElement('header')

  $elem.insertAdjacentHTML('beforeend', `
    <div class="heading">
      <img src=${logo} class="logo" alt="${'строительная компания aspro'}" />
    </div>
    <div class="content">
      <div class=${'banner'}>
        <img src=${banner} alt="${'строительная компания aspro'}" />
      </div>
      <div class=${'triangles'}>
        <div class=${'upper-triangle'}></div>
        <div class=${'lower-triangle'}></div>
        <div class=${'right-triangle'}></div>
        <div class=${'left-triangle'}></div>
        <div class=${'long-line'}></div>
        <div class=${'short-line'}></div>
      </div>
      <div class=${'text'}>
        <div class=${'adress'}>
          <div class="title">
            <h1>ООО "СК&nbsp; АСПРО"</h1>
            <div class="street">109382, г.Москва, ул. Люблинская, д.141, оф.424 </div>
          </div>
          <div class="phone"> +7(499) 964-46-70 </div>
          <div class="email"> info@sk-aspro.ru </div>
        </div>
        <div class=${'menu'}></div>
      </div>
    </div>
  `)

  return $elem
}