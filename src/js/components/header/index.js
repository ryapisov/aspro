import logo from '../../../img/aspro_min.jpg'

export const header = () => {
  const elem = document.createElement('header')
  elem.insertAdjacentHTML("afterBegin", `
    <div class=${'header__logo'}>
      <img srcs=${logo} alt="${'строительная компания aspro'}" />
    </div>
  `)
  return elem
}