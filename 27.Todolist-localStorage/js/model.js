function loadStorage() {
    let items = JSON.parse(localStorage.getItem('TODO_ITEMS'));
    if (items) {
      return items;
    } else {
      return [];
    }
  }
  function saveStorage(items) {
    localStorage.setItem('TODO_ITEMS', JSON.stringify(items));
    loadStorage();
    showItems(items);
  
  }


  function deleteItem(id) {
    let items = loadStorage();
    items = items.filter(item => item.id !== id);
    console.log(items);
    saveStorage(items);
    return items;
  
  }