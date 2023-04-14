//get
// axios
// .get("https://jsonplaceholder.typicode.com/posts")
// .then(response => console.log(response.data))
// .catch(error => console.log(error));

// // get api
// const couresApi = axios.create({
//   baseURL: "http://localhost:3000",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });
// // var couresApi = "http://localhost:3000/profile";
// function start() {
//   getuser();
// }
// start();
// let users = [];
// async function getuser() {
//   try {
//     let reponse = await couresApi.get("/posts");
//     users = reponse.data;
//     // console.log(users);
//     renderUser();
//   } catch (error) {
//     console.log(error);
//   }
// }
let btnAdd = document.querySelector(".add");
let btnDelete = document.querySelector(".delete");
let btnUpdate = document.querySelector(".update");
let searchIp = document.querySelector('.search input')

function render(data) {
  let result = ``;
  data.map((elm) => {
    result += `<tr class="item" onclick ="getItemFillTable(${elm.id})">
         <td >${elm.id}</td>
         <td>${elm.username}</td>
         <td>${elm.password}</td>
         <td>${elm.gender}</td>
         <td>${elm.favorites}</td>
         <td>${elm.nationality}</td>
         <td>${elm.note}</td>
        </tr>`;
  });
  document.querySelector("#result").innerHTML = result;
}
//get
const URL = "http://localhost:3000/profile";
async function getData() {
  try {
    let reponse = await axios.get(URL);
    let data = reponse.data;
    render(data);
  } catch (error) {
    console.log(error);
  }
}
async function getDataId(id, callback) {
  try {
    let res = await axios({
      method: "GET",
      url: URL + "/" + id,
      //   reponseType:'json'
    });
    let data = res.data;
    callback(data);
    //  console.log(res.status + "--" + res.statusText);
    //  console.log(res.headers);
    //  console.log(res.data);
  } catch (error) {
    console.log(error);
  }
  // Itemvalue(data);
}
function start() {
  getData();
}
start();

//POST
btnAdd.addEventListener("click", function (e) {
  console.log(e);
  postData();
});
async function postData() {
  try {
    let data = CreateFormValue();
    const res = await axios({
      method: "POST",
      url: URL,
      data: data,
    });
    // console.log(res.status + "--" + res.statusText);
    // console.log(res.headers);
    // console.log(res.data);
  } catch (error) {
    console.log(error);
  }
}

//DELETE
function deleteData(id) {
  console.log(id);
  btnDelete.removeAttribute("disabled");
  btnDelete.addEventListener("click", async function () {
    try {
      const res = await axios.delete(URL + "/" + id);
      // console.log(res.status + "--" + res.statusText);
      // console.log(res.headers);
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  });
}
//UPDATE
function updateData(id) {
  btnUpdate.removeAttribute("disabled");
  btnUpdate.addEventListener("click", async (e) => {
    e.preventDefault()
    try {
      let result = CreateFormValue(id);
      let data2 = {
     
      };
      // console.log(data);
      const res = await axios(URL + "/" + id, {
        method: "PUT",
        data: {
          username: result.username,
          password: result.password,
          gender: result.gender,
          favorites: result.favorites,
          nationality: result.nationality,
          note: result.note,
        },
      });
      console.log(res.status + "--" + res.statusText);
      console.log(res.headers);
       console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  });
}

function getItemFillTable(id) {
  clearFormValue();
  getDataId(id, function (data) {
    console.log(data);
    let id = document.querySelector("#id");
    let username = document.querySelector("#username");
    let password = document.querySelector("#password");
    let gender = document.getElementsByName("gender");
    let favorites = document.getElementsByName("favorites");
    let nationality = document.querySelector("#nationality");
    let note = document.querySelector("#note");
    gender.forEach((element) => {
      if (element.value == data.gender) {
        element.setAttribute("checked", "");
      } else {
        element.removeAttribute("checked");
      }
    });
    favorites.forEach((element) => {
      data.favorites &&
        data.favorites.forEach((elm) => {
          if (elm == element.value) {
            element.setAttribute("checked", "");
          }
        });
      return;
    });
    id.value = data.id;
    username.value = data.username;
    password.value = data.password;
    nationality.value = data.nationality;
    note.value = data.note;
  });
  deleteData(id);
  updateData(id);
}
function clearFormValue() {
  console.log("clear");
  var id = document.querySelector("#id");
  var username = document.querySelector("#username");
  var password = document.querySelector("#password");
  var gender = document.getElementsByName("gender");
  var favorites = document.getElementsByName("favorites");
  var nationality = document.querySelector("#nationality");
  var note = document.querySelector("#note");
  id.value = "";
  username.value = "";
  password.value = "";
  nationality.value = "";
  note.value = "";
  gender.forEach((elm) => elm.removeAttribute("checked"));
  favorites.forEach((elm) => {
    elm.removeAttribute("checked");
  });
}

//create data
function CreateFormValue(idP) {
  let id = idP ? idP : randomId();
  let username = document.querySelector("#username");
  let password = document.querySelector("#password");
  let gender = document.getElementsByName("gender");
  let favorites = document.getElementsByName("favorites");
  let nationality = document.querySelector("#nationality");
  let note = document.querySelector("#note");
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
  var data = {
    id: id,
    username: username.value.trim(),
    password: password.value.trim(),
    gender: genderValue,
    favorites: favoritesValue,
    nationality: nationality.value,
    note: note.value.trim(),
  };
  return data;
}
function randomId(length = 5) {
  var chars = "123456789".split("");
  var str = "";
  for (var i = 0; i < length; i++) {
    str += chars[Math.floor(Math.random() * chars.length)];
  }
  return str;
}
searchIp.addEventListener('input', function (e) {
  let txtSearch = e.target.value.trim().toLowerCase();
  let listProductDom = document.querySelectorAll(".item");
   listProductDom.forEach((item) => {
     console.log(item.innerHTML);
      if (item.innerText.toLowerCase().includes(txtSearch)) {
       item.classList.remove("hide");
     } else {
       item.classList.add("hide");
     }
    
   });
})