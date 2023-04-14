// function reqListener() {
//   console.log(this.responseText);
// }

// const req = new XMLHttpRequest();
// req.addEventListener("load", reqListener);
// req.open("GET", "http://www.example.org/example.txt");
// req.send();
const url = "http://localhost:3000/posts";
var btnGetId = document.querySelector(".getId");
var btnPost = document.querySelector("button.post");
const xhttp = new XMLHttpRequest();
// onreadystatechange or onload
xhttp.onload = function () {
  if (xhttp.readyState === 4 && xhttp.status === 200) {
    var res = JSON.parse(xhttp.responseText);
    renderList(res);
  }

};
xhttp.open("GET", "http://localhost:3000/posts");
xhttp.send();
// getList();
function renderList(data) {
  var lists = document.querySelector("#resultGet");
  data.map((elm) => {
    lists.innerHTML += `<tr>
            <td>${elm.id}</td>
            <td>${elm.title}</td>
            <td>${elm.author}</td>
            <td><button onclick= editItem(${elm.id})>Edit</button> <button onclick= deleteItem(${elm.id})>Delete</button></td>
            </tr>
            `;
  });
}
btnPost.addEventListener("click", function () {
  var id = makeID();
  var title = document.querySelector("#title").value;
  var author = document.querySelector("#author").value;
  const xhttp = new XMLHttpRequest();
  // xhttp.onload = getList();
  xhttp.open("POST", "http://localhost:3000/posts");
  // xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");//c1
  xhttp.setRequestHeader("Content-type", "application/json; charset=utf-8");
  let data = {
    id: id,
    title: title,
    author: author,
  };
  var json = JSON.stringify(data);
  xhttp.send(json);
  setTimeout(() => {
    xhttp.abort();
  }, 500);
  // xhttp.send(`id=${id}&title=${title}&author=${author}`);//c1
});

function deleteItem(id) {
  var xhr = new XMLHttpRequest();
  xhr.open("DELETE", `${url}/${id}`, true);
  xhr.onload = function () {
    var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
      console.table(users);
    } else {
      console.error(users);
    }
  };
  xhr.send(null);
}

function editItem(idItem) {
  var id = document.querySelector("#id");
  var title = document.querySelector("#title");
  var author = document.querySelector("#author");
 
  const xhttp = new XMLHttpRequest();
  xhttp.addEventListener("load", reqListener);
  xhttp.open("GET", "http://localhost:3000/posts");
  xhttp.send();
  function reqListener() {
    var data = JSON.parse(this.responseText);
    let result = data.find((element) => element.id == idItem);
    // console.log(result);
    if (result) {
      id.value = result.id;
      title.value = result.title;
      author.value = result.author;
    }
    data = {
      id: id.value,
      title: title.value,
      author: author.value,
    };
    console.log(data);
    console.log(result);
     var btnAdd = document.querySelector(".post");
     btnAdd.classList.remove("post");
     btnAdd.classList.add("update");
     btnAdd.innerText = "update";
     var btnUpdate = document.querySelector(".update");
    btnUpdate.addEventListener("click", (e) => {
      e.preventDefault();
      updateItem(idItem);
    });
  }
}
function updateItem(idItem) {
  var id = document.querySelector("#id");
  var title = document.querySelector("#title");
  var author = document.querySelector("#author");
  data = {
    id: id.value,
    title: title.value,
    author: author.value,
  };
  var json = JSON.stringify(data);
  console.log(idItem);
  console.log(json);
  const xhttp = new XMLHttpRequest();
  xhttp.abort();
  //  xhttp.addEventListener("load", getList);
  xhttp.open("PUT", `${url}/${idItem}`, true);
  xhttp.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhttp.send(json);
  //   setTimeout(() => {
  //     const xhttp = new XMLHttpRequest();
  //     xhttp.abort()
  //    //  xhttp.addEventListener("load", getList);
  //     xhttp.open("PUT", `${url}/${idItem}`,true);
  //     xhttp.setRequestHeader(
  //       "Content-type",
  //       "application/json; charset=utf-8"
  //     );
  //     xhttp.send(json);
  //  }, 1000);
}

function makeID(length = 5) {
  var result = [];
  var characters = "0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result.push(
      characters.charAt(Math.floor(Math.random() * charactersLength))
    );
  }
  return result.join("");
}
