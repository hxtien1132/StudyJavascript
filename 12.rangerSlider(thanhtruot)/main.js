var range = document.querySelector('.range')
var process = document.querySelector('.process')
var value = document.querySelector('.process span')
range.addEventListener('mousemove', function (e) {
    console.log("pageX+pageY", e.pageX, e.pageY);
    console.log("offsetLeft+offsetRight",this.offsetLeft,this.offsetRight);
    var processWidth = e.pageX - this.offsetLeft
    console.log("processWidth", processWidth);
    console.log("this.offsetWidth_this.offetHeigth",this.offsetWidth,this.offsetHeight);
    var percent = processWidth / this.offsetWidth * 100
    console.log(processWidth / this.offsetWidth);
    console.log(percent);
    percent = Math.round(percent)
    console.log(percent);
    updataProcess(percent)
    //offsetWidth:kết thúc chiều rộng của phần tử
    //pageX-pageY: lấy giá trị từ ngoài màn hình đi vào chỉ khi dùng event(onclick,onmouse,....)
    //offsetX-offsetY :lấy giá trị trong phần tử đi vào(lấy từ border đi vào)
    
})
function updataProcess(percent) {
    process.style.width = `${percent}%`
    value.innerHTML = `${percent}%`;
}


//input duowi
var slider = document.getElementById('slider')
slider.addEventListener('change', function () {
    console.log(this.value);
})

