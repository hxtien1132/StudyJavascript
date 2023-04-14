const LEVELS = [{
    name: 'Small',
    color: 'bg-dark',
    level: 0
  },
  {
    name: 'Medium',
    color: 'bg-info',
    level: 1
  },
  {
    name: 'Hight',
    color: 'bg-danger',
    level: 2
  },

];

function showItemLevel(value) {
  let item = LEVELS.find(element => element.level == value);
  return `<span class="badge ${item.color}">${item.name}</span>`;
}

let eleAreaListTask = document.getElementById('area-list-task');
let eleAreaForm = document.getElementById('area-form');
let btnToggForm = document.getElementById('btn-toggle-form');
let btnCannel = document.getElementById('btn-cannel');
let btnSubmit = document.getElementById('btn-submit');
let btnUpdate = document.getElementById('btn-update');
let ipName = document.getElementById("input-name");
let iplevel = document.getElementById("input-level");
let items=[{
    id : makeID(),
    name : 'ten 1',
    level : 0
},
{
    id : makeID(),
    name : 'ten 1',
    level : 1
},
{
    id : makeID(),
    name : 'ten 1',
    level : 2
},

];
saveStorage(items);
// let items = {};
items = loadStorage();
showItems(items);


btnToggForm.addEventListener('click', function () {
  let isShow = eleAreaForm.classList.contains('d-none') ? 1 : 0;
  toggleForm(isShow);


})
btnCannel.addEventListener('click', function () {
  toggleForm(false);

})

function toggleForm(isShow) {
  if (isShow == true) {
    console.log('show form');
    eleAreaForm.classList.remove('d-none');
    btnToggForm.innerText = 'close';
    btnToggForm.classList.remove('btn-infor');
    btnToggForm.classList.add('btn-danger');
  } else {
    console.log('hide-form');
    eleAreaForm.classList.add('d-none');
    btnToggForm.innerText = 'Add Task';
    btnToggForm.classList.remove('btn-danger');
    btnToggForm.classList.add('btn-info');
  }

}

document.addEventListener('click', function (event) {
  console.log(event.target);
  let ele = event.target;
  if (ele.classList.contains('btn-delete'));
  let id = ele.getAttribute('data-id');
  let items = deleteItem(id);
  showItems(items);
});

function deleteItem(id) {
  let items = loadStorage();
  items = items.filter(item => item.id !== id);
  console.log(items);
  saveStorage(items);
  return items;

}

function makeID(length = 5) {
  var result = [];
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result.push(characters.charAt(Math.floor(Math.random() *
      charactersLength)));
  }
  return result.join('');
}


function showItems(items) {

  let content = '';
  items.forEach((item, idx) => {
    let index = idx + 1;
    let id = item.id;
    let name = item.name;
    let level = showItemLevel(item.level);
    content += `
    <tr>
    <td>${index}</td>
    <td>${id}</td>
    <td>${name}</td>
    <td>${level}</td>
    <td>
    <button tyle="button" class="btn btn-warning" onclick="edittask(${index-1})">Edit</button>
    <button tyle="button" class="btn btn-danger btn-delete" data-id="${id}">Delete</button>
    </td>
    </tr>
    `;
  });
  eleAreaListTask.innerHTML = content;

}



let ul = document.getElementById('dropdown-menu');
ul.onclick = function (event) {
  let target = event.target.innerText;
  //  alert(event.target.innerHTML);
  document.querySelector('.text').innerHTML = target;
};


btnSubmit.addEventListener('click', function () {
 let ten = ipName.value ;
 let lv = iplevel.value;
  let id = makeID();

  if (validate()) {
    items = localStorage.getItem("TODO_ITEMS");
    if (items == null) {
      taskObj = [];
    } else {
      taskObj = JSON.parse(items);
    }
    taskObj.push({
      'id': id,
      'name': ten,
      'level': lv
    });
    // console.log(taskObj);
    saveStorage(taskObj);
  }


});


function edittask(index) {

  //  btnSubmit.classList.remove('');
  toggleForm(true);
  btnSubmit.classList.add('d-none');
  btnUpdate.classList.remove('d-none');
  let saveindex = document.getElementById("saveindex");
  saveindex.value = index;
  webtask = localStorage.getItem("TODO_ITEMS");
  taskobj = JSON.parse(webtask);
  ipName.value = taskobj[index]['name'];
  iplevel.value = taskobj[index]['level'];

}

btnUpdate.addEventListener("click", function () {
  let i = document.getElementById("saveindex").value;
  webtask = localStorage.getItem("TODO_ITEMS");
  taskobj = JSON.parse(webtask);
  if (validate()) {
    let obj = taskobj[i];
    obj.id = taskobj[i]['id'];
    obj.name = document.getElementById("input-name").value;
    obj.level = document.getElementById("input-level").value;
    saveStorage(taskobj);
    btnSubmit.classList.remove('d-none');
    btnUpdate.classList.add('d-none');
    resetForm();
  }
  // window.location.reload();
})




function saveStorage(items) {
  localStorage.setItem('TODO_ITEMS', JSON.stringify(items));
  loadStorage();
  showItems(items);

}

function loadStorage() {
  let items = JSON.parse(localStorage.getItem('TODO_ITEMS'));
  if (items) {
    return items;
  } else {
    return [];
  }
}

function resetForm() {
  document.getElementById("input-name").value = "";
  document.getElementById("input-level").value = "1";


}


function validate() {
  isValid = true;
  if (document.getElementById("input-name").value == "") {
    isValid = false;
    alert("mời nhập tên");

  } else {
    isValid = true;


  }
  return isValid;
}


// Sort by NameAsc
var sortByNameAsc = () => {
  const items = loadStorage();
  items.sort((item1, item2) => {
    let a = item1.name.toLowerCase();
    let b = item2.name.toLowerCase();
    return a === b ? 0 : a > b ? 1 : -1;
  });
  //   console.table(items);
  localStorage.setItem("TODO_ITEMS", JSON.stringify(items));
  window.location.reload();
};

// Sort by NameDesc
var sortByNameDesc = () => {
  const items = loadStorage();

  items.sort((item1, item2) => {
    let a = item1.name.toLowerCase();
    let b = item2.name.toLowerCase();
    return a === b ? 0 : a < b ? 1 : -1;
  });
  //   console.table(items);
  localStorage.setItem("TODO_ITEMS", JSON.stringify(items));
  window.location.reload();
};

// Sort by LevelAsc
var sortByLevelAsc = () => {
  const items = loadStorage();

  items.sort((item1, item2) => {
    return item1.level - item2.level;
  });
  //   console.table(items);
  localStorage.setItem("TODO_ITEMS", JSON.stringify(items));
  window.location.reload();
};

// Sort by LevelDesc
var sortByLevelDesc = () => {
  const items = loadStorage();

  items.sort((item1, item2) => {
    return item2.level - item1.level;
  });
  //   console.table(items);
  localStorage.setItem("TODO_ITEMS", JSON.stringify(items));
  window.location.reload();
};

const search = () => {
  $(document).ready(function () {
    $("#myInput").on("keyup", function (event) {
      event.preventDefault();
      /* Act on the event */
      var keyword = $(this).val().toLowerCase();
      $("#area-list-task tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(keyword) > -1);
      });
    });
  });
};

search();