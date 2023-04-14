// c2:xu li data
var btnList = document.querySelectorAll("button");
var imglist = document.querySelectorAll("img");
var container = document.querySelector(".food-container");

var arr = [];
imglist.forEach((item) => {
  arr.push({
    src: item.src,
    type: item.getAttribute("type"),
  });
});
//

function activeBtn(btnActive) {
    btnList.forEach(btn => {
     btn.classList.remove('active')
    })
    btnActive.classList.add('active')
}
btnList.forEach((btn) => {
    btn.addEventListener("click", (e) => {
    let type = e.currentTarget.getAttribute("type");
      if (type == "all") {
          render(arr)
          return;
      }
    let filterData = arr.filter((food) => {
      return food.type == type;
    });
    render(filterData);
  });
});

function render(list) {
  container.innerHTML = "";
  list.forEach((item) => {
    let imgElement = document.createElement("img");
    imgElement.src = item.src;
    imgElement.setAttribute("type", item.type);
    let divElm = document.createElement("div");
    divElm.classList.add("food");
    divElm.appendChild(imgElement);
    container.append(divElm);
  });
}

// c1 :xu li ui
// var btnList = document.querySelectorAll('button')
// var imglist = document.querySelectorAll('img')

// btnList.forEach(btn => {
//     btn.addEventListener('click', e => {
//         console.log(e.target.getAttribute('type'));
//         console.log(btn.innerText);
//         let type = e.currentTarget.getAttribute('type')
//         imglist.forEach(img => {
//             let foodType = img.getAttribute('type')
//             if (type == 'all' || foodType == type) {
//              img.classList.remove('hide')
//             } else {
//             img.classList.add('hide')}

//         })
//     })
// })
