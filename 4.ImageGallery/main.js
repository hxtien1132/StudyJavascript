var images = document.querySelectorAll(".image img");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var close = document.querySelector(".close");
var galleryImg = document.querySelector(".gallery-inner img");
var gallery = document.querySelector(".gallery");
var currentIndex = 0;

function showGalley() {
  //dislay
  if (currentIndex == 0) {
    prev.classList.add("hide");
  } else {
    prev.classList.remove("hide");
  }
  if (currentIndex == images.length - 1) {
    next.classList.add("hide");
  } else {
    next.classList.remove("hide");
  }

  galleryImg.src = images[currentIndex].src;
  gallery.classList.add("show");
}

images.forEach((item, index) => {
  item.addEventListener("click", function () {
    currentIndex = index;
    galleryImg.src = images[currentIndex].src;
    gallery.classList.add("show");
  });
});
close.addEventListener("click", function () {
  gallery.classList.remove("show");
});
document.addEventListener("keydown", function (e) {
  //c1
  // if(e.keyCode == 27){
  //     gallery.classList.remove('show')
  // }
  //c2
  if (e.code == "Escape") {
    gallery.classList.remove("show");
  }
  //e.code k bắt buộc chữ hoa,chữ thường,e.key bắt lỗi chữ hoa,thường
});
prev.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
    showGalley();
  }
});
next.addEventListener("click", function () {
  console.log(images.length);
  if (currentIndex < images.length - 1) {
    currentIndex++;
    showGalley();
  }
});
