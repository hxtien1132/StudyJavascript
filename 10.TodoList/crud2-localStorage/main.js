var input = document.querySelector("input");
var button = document.querySelector("button.add");
var form = document.querySelector("form");
var todos = document.querySelector(".todos");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let val = input.value.trim();
    if (val) {
        addTodoElm({
            text: val
        })
        saveStorage()
    }
    input.value=''
});
function addTodoElm(todo) {
  var li = document.createElement("li");
  li.innerHTML = `<span>${todo.text}</span>
  <i class="fa-solid fa-trash"></i>`;
  if (todo.status === "completed") {
    li.setAttribute("class", "completed");
    }
    li.addEventListener('click', function() {
        this.classList.toggle('completed')
        saveStorage()
    })
    li.querySelector('i').addEventListener('click', function () {
        console.log(this)
        this.parentElement.remove()
        saveStorage()
    })
    todos.appendChild(li)
}

let todoStorage = []

function saveStorage() {
    console.log("saveStorage");
    let todoList = document.querySelectorAll('li')
    todoList.forEach(function (item) {
        let text = item.querySelector('span').innerText
        let status = item.getAttribute('class')
        todoStorage.push({
            text,
            status
        })
    })
    localStorage.setItem('listToDo', JSON.stringify(todoStorage))
    // init()
}

function init() {
    console.log("init");
    let data = JSON.parse(localStorage.getItem('listToDo'))
    // console.log(data);
     let res = data ? data : []
    res.forEach(function (item) {
        addTodoElm(item)
    })
}
init();