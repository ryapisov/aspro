
const btn = document.querySelector('#btn-open-form')
const btnClose = document.querySelector('#btn-close')
const form = document.querySelector('#form')
const constact = document.querySelector('#contacts')


btn.addEventListener('click', ()=>{
  form.style.display = 'block'
  constact.style.display = 'none'
})

btnClose.addEventListener('click', ()=>{
  form.style.display = 'none'
  constact.style.display = 'block'
})
