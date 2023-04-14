var eKey = document.querySelector('.card.key p:last-child')
var eLocaion = document.querySelector('.card.location p:last-child')
var eWhich = document.querySelector('.card.which p:last-child')
var eCode = document.querySelector('.card.code p:last-child')
var eAlert = document.querySelector('.alert')
var eBox = document.querySelector('.box')
var eResult = document.querySelector('.result')


// eAlert.addEventListener('click',()=> console.log("hxt"))
document.addEventListener('keydown', e =>{
    // console.log(e.code);
  eKey.innerText = e.key
  eLocaion.innerText = e.location
  eWhich.innerText = e.which 
  eCode.innerText = e.code
  eResult.innerText = e.which
  eAlert.classList.add('hide')
  eBox.classList.remove('hide')
})
