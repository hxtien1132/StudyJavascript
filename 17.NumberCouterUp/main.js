var fb = document.querySelector('.facebook h2')
var youtube = document.querySelector(".youtube h2");
var tiktok = document.querySelector(".tiktok h2");

function count(element, to) {
    var count = 0;
    var time = 144;
    var step = to / time;
    let counting = setInterval(() => {
        count += step;
        if (count > to) {
            clearInterval(counting)
            element.innerText = to
        } else {
          element.innerText = Math.round(count)
        }
    }, 10);
}
count(fb, 3000)
count(youtube, 9000);
count(tiktok, 5000);



