const URL = "http://localhost:3000/profile";

const result = document.querySelector("#result");

getData();

function renderList(data) {
  var html = "";
  data.map((elm) => {
    html += `<tr class="product">
          <td>${elm.id}</td>
          <td>${elm.username}</td>
          <td>${elm.password}</td>
          <td>${elm.gender}</td>
          <td>${elm.favorites}</td>
          <td>${elm.nationality}</td>
          <td>${elm.note}</td>
          <td><button onclick=editBtn(${elm.id})>Edit</button> <button onclick=deleteBtn(${elm.id})>Delete</button></td>
        </tr>`;
  });
  result.innerHTML += html;
}

document.querySelector(".add").addEventListener("click", (e) => {
  e.preventDefault();
  let data = getFormData();
  postData(data);
});

function getFormData(id) {
  console.log(id);
  var userId = id ? id : randomId();
  console.log(userId);
  var username = document.querySelector("#username");
  var password = document.querySelector("#password");
  var gender = document.getElementsByName("gender");
  var genderValue = checkedRadio(gender);
  function checkedRadio(data) {
    var checkValue = "";
    for (let i = 0; i < data.length; i++) {
      if (data[i].checked) {
        checkValue = data[i].value;
      }
    }
    return checkValue;
  }
  var favorites = document.getElementsByName("favorites");
  var favoritesValue = checkedBox(favorites);
  function checkedBox(data) {
    var result = "";
    // Lặp qua từng checkbox để lấy giá trị
    for (var i = 0; i < data.length; i++) {
      if (data[i].checked) {
        result += data[i].value + " ";
      }
    
    }
    let text2 = result.trim();
    const res = text2.split(" ");
    return res ? res : "";
  }
  var nationality = document.querySelector("#nationality");
  var note = document.querySelector("#note");
  var data = {
    id: userId,
    username: username.value.trim(),
    password: password.value.trim(),
    gender: genderValue,
    favorites: favoritesValue,
    nationality: nationality.value,
    note: note.value.trim(),
  };
  return data;
}

function deleteBtn(id) {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      data.find(function (elm) {
        if (elm.id == id) {
          console.log(elm.id);
          deleteData(elm.id);
        } else {
          return;
        }
      });
    });
}

function editBtn(id) {

  console.log(id);
  // var btnAdd = document.querySelector(".add");
  // btnAdd.style.display = "none";
  var btnUpdate = document.querySelector(".update");
   btnUpdate.removeAttribute("disabled")
  fetch(URL + "/" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((response) => {
      resetForm();
      let data = response;
      var userId = document.querySelector("#userId");
      var username = document.querySelector("#username");
      var password = document.querySelector("#password");
      var gender = document.getElementsByName("gender");
      var favorites = document.getElementsByName("favorites");
      var nationality = document.querySelector("#nationality");
      var note = document.querySelector("#note");
      gender.forEach((element) => {
        if (element.value == data.gender) {
          element.setAttribute("checked", "");
        } else {
          element.removeAttribute("checked");
        }
      });
      favorites.forEach((element) => {
        data.favorites
          ? data.favorites.forEach((elm) => {
              if (elm == element.value) {
                element.setAttribute("checked", "");
              }
            })
          : "";
      });
      userId.value = data.id;
      username.value = data.username;
      password.value = data.password;
      nationality.value = data.nationality;
      note.value = data.note;
      putData(id, data);
    });
  // let db = getFormData(id);
  // .catch((error) => console.log(error));
}

//GET
function getData() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      renderList(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// /POST
function postData(data) {
  console.log("post");
  let formData = data;
  console.log(formData);
  fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      // getData(); // reload the table
    });
  // getItem();
}

//PUT
function putData(id) {
  console.log("put", id);
  var btnUpdate = document.querySelector(".update");
  btnUpdate.addEventListener("click", (e) => {
    // e.preventDefault();
     let data = getFormData(id);
     // console.log("put");
     console.log(data);
     let db = {
       // id:data.id,
       username: data.username,
       password: data.password,
       gender: data.gender,
       favorites: data.favorites,
       nationality: data.nationality,
       note: data.note,
     };
    setTimeout(() => {
      var options = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(db),
      };
      fetch(URL + "/" + id, options)
        .then((res) => res.json())
        .then((data) => {
          getData();
        });
    }, 500);
  });
}

//DELETE
function deleteData(id) {
  console.log(typeof id);
  fetch(URL + "/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function resetForm() {
  var userId = document.querySelector("#userId");
  var username = document.querySelector("#username");
  var password = document.querySelector("#password");
  var gender = document.getElementsByName("gender");
  var favorites = document.getElementsByName("favorites");
  var nationality = document.querySelector("#nationality");
  var note = document.querySelector("#note");

  userId.value = "";
  username.value = "";
  password.value = "";
  nationality.value = "";
  note.value = "";
  favorites.forEach((elm) => {
    elm.removeAttribute("checked");
  });
}

function randomId(length = 5) {
  var chars = "0123456789".split("");

  if (!length) {
    length = Math.floor(Math.random() * chars.length);
  }

  var str = "";
  for (var i = 0; i < length; i++) {
    str += chars[Math.floor(Math.random() * chars.length)];
  }
  return str;
}

var searchInput = document.querySelector(".search input");
searchInput.addEventListener("input", function (e) {
  console.log(e.target.value);
  let txtSearch = e.target.value.trim().toLowerCase();
  let listProductDom = document.querySelectorAll(".product");
  listProductDom.forEach((item) => {
    console.log(item.innerHTML);
    if (item.innerText.toLowerCase().includes(txtSearch)) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
});