var content = document.querySelector(".content");
var input = document.querySelector(".content input");
var btnRemoveAll= document.querySelector('.remove-all')
var tags = ["nodejs", "reactjs"];
function rerender() {
  content.innerHTML = "";
  tags.map((value, index) => {
    const tag = tags[index];
    content.innerHTML += `<li>${tag}
        <i class="fa-solid fa-xmark" onclick="removeTag(${index});"></i></li>`;
  });
  content.appendChild(input);
  input.focus();
}
rerender();
function removeTag(index) {
  tags.splice(index, 1);
  rerender();
}

function addTag() {}
input.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    tags.push(input.value.trim());
    input.value = "";
    rerender();
  }

});
btnRemoveAll.addEventListener("click", function () {
    console.log("this",this)
    tags = [];
    rerender();
})

