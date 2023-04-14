function showItemLevel(value) {
    let item = LEVELS.find(element => element.level == value);
    return `<span class="badge ${item.color}">${item.name}</span>`;
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