var boxes = document.querySelectorAll(".box");
var targetList = document.querySelectorAll(".target");

var currentTarget = null;

//style
targetList.forEach((target) => {
//   console.log(target);
  target.addEventListener("dragstart", function (e) {
    this.classList.add("dragging");
    currentTarget = this;
  });
  target.addEventListener("dragend", function (e) {
    this.classList.remove("dragging");
  });
});

//effect
boxes.forEach((element) => {
//   console.log(element);
    element.addEventListener("dragover", function (e) {
      console.log(e.target)
    e.preventDefault();//khi nhận được sẽ khóa mục tiêu
  });
  element.addEventListener("drop", function (e) {
    if (!element.querySelector(".target")) {
      this.appendChild(currentTarget);
    }
  });
});
