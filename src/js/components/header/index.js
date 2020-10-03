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
      </div>
    </div>
  `)

  return $elem
}