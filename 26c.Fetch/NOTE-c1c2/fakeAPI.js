var URL = "http://localhost:3000/posts";

//C1
fetch(URL)
  .then(function (reponse) {
    if (reponse.status !== 200) {
      console.log("Lỗi, mã lỗi " + reponse.status);
      return;
    }
    return reponse.json();
  })
  .then(function (course) {
    console.log(course);
  })
  .catch((err) => {
    console.log("Error :-S", err);
  });
//C2
async function getItem() {
  var data = await fetch(URL).then((response) => response.json());
  console.log(data);
}
getItem();
