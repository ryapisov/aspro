import '../scss/index.scss'

const btn = document.querySelector('#btn-open-form')
const btnClose = document.querySelector('#btn-close')
const form = document.querySelector('#form')
const requisites = document.querySelector('#requisites')
const textarea = document.querySelector("textarea")
const checkSuccess = document.querySelector("form")[1]

btn.addEventListener('click', ()=>{
  form.style.display = 'block'
  requisites.style.display = 'none'
})

btnClose.addEventListener('click', ()=>{
  form.style.display = 'none'
  requisites.style.display = 'block'
})

textarea.addEventListener("keyup", function(e) {
  if(e.code){
   checkSuccess.value="form-success-sk-aspro.ru"
  }
})