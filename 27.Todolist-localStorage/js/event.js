btnSubmit.addEventListener('click', function () {
    let ten = document.getElementById("input-name").value;
    let lv = document.getElementById("input-level").value;
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
   if(validate()){
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
let sortByNameAsc = () => {
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
  let sortByNameDesc = () => {
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
  let sortByLevelAsc = () => {
    const items = loadStorage();
  
    items.sort((item1, item2) => {
      return item1.level - item2.level;
    });
    //   console.table(items);
    localStorage.setItem("TODO_ITEMS", JSON.stringify(items));
    window.location.reload();
  };
  
  // Sort by LevelDesc
  let sortByLevelDesc = () => {
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

  btnToggForm.addEventListener('click', function () {
    let isShow = eleAreaForm.classList.contains('d-none') ? 1 : 0;
    toggleForm(isShow);
  
  
  })
  btnCannel.addEventListener('click', function () {
    toggleForm(false);
  
  })


  document.addEventListener('click', function (event) {
    let ele = event.target;
    if (ele.classList.contains('btn-delete'));
    let id = ele.getAttribute('data-id');
    let items = deleteItem(id);
    showItems(items);
  });


  ul.onclick = function (event) {
    let target = event.target.innerText;
    //  alert(event.target.innerHTML);
    document.querySelector('.text').innerHTML = target;
  };