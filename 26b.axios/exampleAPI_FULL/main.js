const instance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

function htmlizeResponse(res) {
  return (
    `<div class="alert alert-secondary mt-2" role="alert"><pre>` +
    JSON.stringify(res, null, 2) +
    "</pre></div>"
  );
}

async function getAllData() {
  let resultElement = document.getElementById("getResult");
  resultElement.innerHTML = "";

  try {
    const res = await instance.get("/posts");

    const result = {
      status: res.status + "-" + res.statusText,
      headers: res.headers,
      data: res.data,
    };

    resultElement.innerHTML = htmlizeResponse(result);
  } catch (err) {
    resultElement.innerHTML = htmlizeResponse(err);
  }
}

async function getDataById() {
  let resultElement = document.getElementById("getResult");
  resultElement.innerHTML = "";

  const id = document.getElementById("get-id").value;

  if (id) {
    try {
      const res = await instance.get(`/posts/${id}`);

      const result = {
        status: res.status + "-" + res.statusText,
        headers: res.headers,
        data: res.data,
      };

      resultElement.innerHTML = htmlizeResponse(result);
    } catch (err) {
      resultElement.innerHTML = htmlizeResponse(err);
    }
  }
}

async function getDataByTitle() {
  let resultElement = document.getElementById("getResult");
  resultElement.innerHTML = "";

  const title = document.getElementById("get-title").value;

  if (title) {
    try {
      // const res = await instance.get(`/tutorials?title=${title}`);
      const res = await instance.get("/posts", {
        params: {
          title: title,
        },
      });

      const result = {
        status: res.status + "-" + res.statusText,
        headers: res.headers,
        data: res.data,
      };

      resultElement.innerHTML = htmlizeResponse(result);
    } catch (err) {
      resultElement.innerHTML = htmlizeResponse(err);
    }
  }
}

async function postData() {
  let resultElement = document.getElementById("postResult");
  resultElement.innerHTML = "";

  const title = document.getElementById("post-title").value;
  const author = document.getElementById("post-author").value;

  try {
    const res = await instance.post("/posts", {
      title: title,
      author: author,
    });

    const result = {
      status: res.status + "-" + res.statusText,
      headers: res.headers,
      data: res.data,
    };

    resultElement.innerHTML = htmlizeResponse(result);
  } catch (err) {
    resultElement.innerHTML = htmlizeResponse(err);
  }
}
async function btnSearch() {
  const id = document.getElementById("put-id").value;
  const title = document.getElementById("put-title");
  const author = document.getElementById("put-author");
  const btnupdate = document.querySelector(".btn-update");
  console.log(id);

  if (id) {
    try {
      const res = await instance.get(`/posts/${id}`);
      const result = res.data;
      btnupdate.removeAttribute("disabled");
      title.value = result.title;
      author.value = result.author;
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
}
async function putData() {
  let resultElement = document.getElementById("putResult");
  resultElement.innerHTML = "";
  try {
    const res = await instance.get(`/posts/${id}`);
  } catch (error) {
    console.log(error);
  }
  const id = document.getElementById("put-id").value;
  const title = document.getElementById("put-title").value;
  const author = document.getElementById("put-author").value;
  const published = document.getElementById("put-published").checked;

  try {
    const res = await instance.put(`/posts/${id}`, {
      title: title,
      author: author,
      published: published,
    });

    const result = {
      status: res.status + "-" + res.statusText,
      headers: res.headers,
      data: res.data,
    };

    resultElement.innerHTML = htmlizeResponse(result);
  } catch (err) {
    resultElement.innerHTML = htmlizeResponse(err);
  }
}

async function deleteAllData() {
  let resultElement = document.getElementById("deleteResult");
  resultElement.innerHTML = "";

  try {
    const res = await instance.delete("/posts");

    const result = {
      status: res.status + "-" + res.statusText,
      headers: res.headers,
      data: res.data,
    };

    resultElement.innerHTML = htmlizeResponse(result);
  } catch (err) {
    resultElement.innerHTML = htmlizeResponse(err);
  }
}

async function deleteDataById() {
  let resultElement = document.getElementById("deleteResult");
  resultElement.innerHTML = "";

  const id = document.getElementById("delete-id").value;

  try {
    const res = await instance.delete(`/posts/${id}`);
    start();

    const result = {
      status: res.status + "-" + res.statusText,
      headers: res.headers,
      data: res.data,
    };

    resultElement.innerHTML = htmlizeResponse(result);
  } catch (err) {
    resultElement.innerHTML = htmlizeResponse(err);
  }
}

function clearGetOutput() {
  document.getElementById("getResult").innerHTML = "";
}

function clearPostOutput() {
  document.getElementById("postResult").innerHTML = "";
}

function clearPutOutput() {
  document.getElementById("putResult").innerHTML = "";
}

function clearDeleteOutput() {
  document.getElementById("deleteResult").innerHTML = "";
}
