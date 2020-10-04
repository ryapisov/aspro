import logo from '../images/aspro_min.jpg'
import banner from '../images/banner_min.jpg'
import iconPhone from '../images/phone.svg'
import iconEmail from '../images/email.svg'

export const showImageLogo = () =>
  `<img src=${logo} alt="${'строительная компания aspro'}" /> `

export const showBanner = () =>
   `<img src=${banner} alt="${'строительная компания aspro'}" />` 
 
export const showTriangles = () => {
  return `
    <div class=${'upper-triangle'}></div>
    <div class=${'lower-triangle'}></div>
    <div class=${'right-triangle'}></div>
    <div class=${'left-triangle'}></div>
    <div class=${'long-line'}></div>
    <div class=${'short-line'}></div>
  `
}

export const showContacts = () => {
  return `
    <div class=${'contact-text'}>
      <h1>ООО "СК&nbsp; АСПРО"</h1>

      <div class="address">
        ${'109382, г.Москва, ул. Люблинская, д.141, оф.424'}
      </div>

      <div class="phone">
        <img src="${iconPhone}" alt="${'строительная компания aspro'}" />
        ${'+7(499) 964-46-70'} 
      </div>

      <div class="email">
        <img src="${iconEmail}" alt="${'строительная компания aspro'}" />
        ${'info@sk-aspro.ru'} 
      </div>
    </div>
  `
}
