var imgFeature = document.querySelector(".img-feature");
var listImg = document.querySelectorAll(".list-image img");
var prevBtn = document.querySelector(".prev");
var nextBtn = document.querySelector(".next");
var currentvalue = 0;
function updateImgIndex(index) {
  document.querySelectorAll(".list-image div").forEach((item) => {
    item.classList.remove("active");
  });
  currentvalue = index;
  imgFeature.src = listImg[index].src;
  listImg[index].parentElement.classList.add("active");
}
listImg.forEach((imgElm, index) => {
  imgElm.addEventListener("click", (e) => {
    imgFeature.style.opacity = "0.6";
    setTimeout(() => {
      updateImgIndex(index);
      imgFeature.style.transition = "1s ease-out";
      imgFeature.style.opacity = "1";
    }, 400);
  });
});
prevBtn.addEventListener("click", (e) => {
  if (currentvalue == 0) {
    currentvalue = listImg.length - 1;
  } else {
    currentvalue--;
  }
  imgFeature.style.animation = "";
  setTimeout(() => {
    updateImgIndex(currentvalue);
    imgFeature.style.animation = "slideLeft 1.5s ease-in-out forwards";
  }, 200);
});
nextBtn.addEventListener("click", (e) => {
  if (currentvalue == listImg.length - 1) {
    currentvalue = 0;
  } else {
    currentvalue++;
  }
  imgFeature.style.animation = "";
  setTimeout(() => {
    //   console.log("hxt")
    updateImgIndex(currentvalue);
    imgFeature.style.animation = "slideRight 1.5s ease-in-out forwards";
  }, 200);
});
updateImgIndex(currentvalue);
