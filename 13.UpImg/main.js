var upload = document.querySelector("#mypicture");
var preview = document.querySelector(".preview");
var error = document.querySelector(".error");

upload.addEventListener("change", function (e) {
  console.log("change", upload.files[0]);

  var file = upload.files[0];
  if (!file) return;
  if (!file.name.endsWith(".jpg")) {
    error.innerHTML = `img thuoc dinh dang jpeg`;
    return;
  } else {
    error.innerHTML = ``;
  }
  if (file.size / (1024 * 1024) > 5) { //kb
    error.innerHTML = `chi duoc upload anh <5mb `;
    return;
  } else {
    error.innerHTML = ``;
  }

    var img = document.createElement("img");
//   c1: save=blob
//   img.src = URL.createObjectURL(file);
//   console.log(img.src);
//   preview.appendChild(img);
    
//   c2: base64
    var fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onloadend = function (e) {
        console.log('load ok', e.target.result);
        img.src = e.target.result
    }
     preview.appendChild(img);
});
