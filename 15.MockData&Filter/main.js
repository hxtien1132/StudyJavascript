var products = document.querySelector(".products");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.forEach((item) => {
      var newProduct = document.createElement("div");
      newProduct.classList.add("product");
      newProduct.innerHTML = `
    <img src="${item.image}" alt="">
                <div class="info">
                    <div class="name">${item.title}</div>
                    <div class="price">${item.price}</div>
                </div>`;
      products.appendChild(newProduct);
    });
  });

var searchInput = document.querySelector('.search input')
searchInput.addEventListener('input', function (e) {
    let txtSearch = e.target.value.trim().toLowerCase()
    let listProductDom = document.querySelectorAll('.product')
    listProductDom.forEach(item => {
        if (item.innerText.toLowerCase().includes(txtSearch)) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
})
})
