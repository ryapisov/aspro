const img1 = document.querySelector('.thank-1')
const img2 = document.querySelector('.thank-2')
const img3 = document.querySelector('.thank-3')
import logo1 from '../images/max/1-max.jpg'
import logo2 from '../images/max/2-max.jpg'
import logo3 from '../images/max/3-max.jpg'

img1.addEventListener('click', ()=>{
  window.open(logo1, '_blank')
})

img2.addEventListener('click', ()=>{
  window.open(logo2, '_blank')
})

img3.addEventListener('click', ()=>{
  window.open(logo3, '_blank')
})