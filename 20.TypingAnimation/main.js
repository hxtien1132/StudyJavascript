var p = document.querySelector('.typing-wrapper p')
var origincontent = p.innerHTML
var index = 0;
var isForward = true;
var time = 400

setInterval( function() {
    if (isForward) {
      index++;
      if (index >= origincontent.length) {
        isForward = false;
        time = 50;
      }
    } else {
      index--;
      if (index <= 0) {
        isForward = true;
      }
    }
    p.innerHTML = origincontent.substring(0,index)
}, time);