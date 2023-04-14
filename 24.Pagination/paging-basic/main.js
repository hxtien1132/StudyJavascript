let users = [];
let currentPage = 1;
let ItemperPage = 2; //trang luu tru bao nhieu phan tu
let totalPage = 0; // tong trang
let perUsers = [];

function getUser() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      users = data;
      console.log(users);
      perUsers = users.slice(
        (currentPage - 1) * ItemperPage, //0,2,4,6,8
        (currentPage - 1) * ItemperPage + ItemperPage //2,4,6,8,10
      );
      renderPageNumber();
      render();
    })
    .catch((err) => console.log(err));
}

function handlePageNumber(num) {
  console.log(currentPage);
  currentPage = num;
  console.log(currentPage);
  perUsers = users.slice(
    (currentPage - 1) * ItemperPage,
    (currentPage - 1) * ItemperPage + ItemperPage
  );

  render();
}

function renderPageNumber() {
  totalPage = users.length / ItemperPage;
  // console.log((totalPage = users.length / ItemperPage));
  let html = ``;
  for (let i = 1; i <= totalPage; i++) {
    html += `<li onclick="handlePageNumber(${i})">${i}</li>`;
  }
  document.querySelector(
    "#pagination"
  ).innerHTML = `<li class="pre" onclick="prev()">prev</li> ${html} <li class="nex" onclick="next()">next</li>`;
}

function render() {
  // console.log(data);
  let elm = `<tr>
            <th>ID</th>
            <th>Name</th>
        </tr>`;

  perUsers.map((element) => {
    elm += `<tr>
         <td>${element.id}</td>
         <td>${element.name}</td> 
        </tr>`;
  });
  document.querySelector("#table").innerHTML = elm;
  prev()
  next()
}
getUser();
function prev() {
  let pre = document.querySelector(".pre");
  pre.addEventListener("click", function () {
    currentPage--
  })
  console.log(currentPage);
  if (currentPage == 1) {
    pre.classList.add("hide");
  } else {
    pre.classList.remove("hide");
  }
  // render()
}
function next() {
  let nex = document.querySelector(".nex");
  nex.addEventListener('click', function (e) {
  currentPage++;
  })
  console.log(currentPage);
  if (currentPage == 5) {
    ne.classList.add("hide");
  } else {
    ne.classList.remove("hide");
  }
  // render()
}
