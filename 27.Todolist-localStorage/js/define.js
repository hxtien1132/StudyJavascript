let eleAreaListTask = document.getElementById('area-list-task');
let eleAreaForm = document.getElementById('area-form');
let btnToggForm = document.getElementById('btn-toggle-form');
let btnCannel = document.getElementById('btn-cannel');
let btnSubmit = document.getElementById('btn-submit');
let btnUpdate = document.getElementById('btn-update');
let ul = document.getElementById('dropdown-menu');
let ipName = document.getElementById("input-name");
let iplevel = document.getElementById("input-level");

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