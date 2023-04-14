var btnOpen = document.querySelector(".open-modal-btn");
var modal = document.querySelector(".modal");
var iconClose = document.querySelector(".modal-header i");
var btnClose = document.querySelector(".modal-footer button");
var modalInner = document.querySelector(".modal-inner");
// function toggleModal(event) {
//   console.log("target", event.target);
//   console.log("current target", event.currentTarget);
//   modal.classList.toggle("hide");
// }
btnOpen.addEventListener("click", show);

function show() {
  modal.classList.remove("hide");
}
function hide() {
  modal.classList.add("hide");
}
//hide
btnClose.addEventListener("click", hide);
iconClose.addEventListener("click", hide);
modal.addEventListener("click", hide);
modalInner.addEventListener("click", function (e) {
  e.stopPropagation();
});
