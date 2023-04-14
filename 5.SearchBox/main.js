var btnSearch = document.querySelector('.search-box-btn')
var input = document.querySelector('.search-box-input')
btnSearch.addEventListener('click',function(){
    console.log(this.parentElement)
    this.parentElement.classList.toggle('open')
    //c1
    this.previousElementSibling.focus()
    //c2// input.focus()
})