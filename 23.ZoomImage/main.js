// var result = document.querySelector("#result");
// document.addEventListener("mousemove", function (e) {
//   result.style.top = `${e.clientY}px`;
//   result.style.left = `${e.clientX}px`;
// });

var img = document.querySelector('img')
var mirror = document.querySelector("#mirror");

img.addEventListener('mousemove', function (e) {
    let w = this.offsetWidth
    let h = this.offsetHeight

    console.log(e.pageX, this.offsetLeft);
    let mouseWithImgBorderX = e.pageX - this.offsetLeft
    let mouseWithImgBorderY = e.pageY - this.offsetTop;
    
    let percentMouseByX = (mouseWithImgBorderX / w) * 100
    let percentMouseByY = (mouseWithImgBorderY / h) * 100;
    console.log(percentMouseByX, percentMouseByY);
    mirror.style.backgroundPosition = `${percentMouseByX}% ${percentMouseByY}%`
  })