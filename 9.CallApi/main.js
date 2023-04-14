var search = document.querySelector(".search");
var city = document.querySelector(".city");
var country = document.querySelector(".country");
var value = document.querySelector(".value");
var shortDesc = document.querySelector(".short-desc");
var visibility = document.querySelector(".visibility span");
var wind = document.querySelector(".wind span");
var sun = document.querySelector(".sun span");
var time = document.querySelector(".time");
var content = document.querySelector(".content");
var body = document.querySelector("body");

async function changeWeatherUI(capitalsearch) {
  //  capitalsearch.trim()
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalsearch}&appid=584a03516f41821ae4b94d5d064b91bb`;
  const data = await fetch(apiURL).then((res) => res.json());
  if (data.cod == 200) {
    console.log(data);
    content.classList.remove("hide");
    city.innerText = data.name;
    country.innerText = data.sys.country;
    visibility.innerText = data.visibility + "m";
    wind.innerText = data.wind.speed + "m/s";
    sun.innerText = data.main.humidity + "%";
    let temp = Math.floor(data.main.temp - 273.15);
    value.innerHTML = temp + `<span> <sup>o</sup>C</span>`;
    shortDesc.innerText = data.weather[0] ? data.weather[0].main : "";
    time.innerText = new Date().toLocaleString("vi");
    body.setAttribute("class", "hot");
    if (temp <= 25) {
      body.setAttribute("class", "warm");
    }
    if (temp <= 18) {
      body.setAttribute("class", "cold");
    }
  } else {
    content.classList.add("hide");
  }
}

search.addEventListener("keydown", (e) => {
  console.log(e.target.value);
  if (e.code === "Enter") {
    let capitalSearch = search.value.trim();
    changeWeatherUI(capitalSearch);
  }
});
changeWeatherUI("da lat");
