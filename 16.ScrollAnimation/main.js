var animationElms = document.querySelectorAll('.show-on-scroll')

function toggleAnimationElmInWindow(elm) {
//1 item
    var rect = elm.getClientRects()[0]
    console.log(rect);
    var heightScreen = window.innerHeight
    console.log(heightScreen)

    //check xem elm có bên trong  màn hình k ?
    if (!(rect.bottom < 0 || rect.top > heightScreen)) {
        //ben trong thi elm vaof
    elm.classList.add('start')
    } else {
        //ben ngoai thi vao trong
        elm.classList.remove('start')
    }

}
function checkAnimation() {
   animationElms.forEach(element => {
    toggleAnimationElmInWindow(element)
   });
}
window.onscroll= checkAnimation