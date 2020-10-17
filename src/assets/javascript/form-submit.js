
const btn = document.querySelector('#btn-open-form')
const btnClose = document.querySelector('#btn-close')
const form = document.querySelector('#submit-form')
const requisites = document.querySelector('#requisites')


btn.addEventListener('click', ()=>{
  form.style.display = 'block'
  requisites.style.display = 'none'
})

btnClose.addEventListener('click', ()=>{
  form.style.display = 'none'
  requisites.style.display = 'block'
})
