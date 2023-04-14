var btnSuccess = document.querySelector(".control .success");
var btnWarning = document.querySelector(".control .warning");
var btnError = document.querySelector(".control .error");
btnSuccess.addEventListener("click", function () {
  createToast("success", 0);
});
btnWarning.addEventListener("click", function () {
  createToast("warning", 0);
});
btnError.addEventListener("click", function () {
  createToast("error", 0);
});

function createToast(status, timeout) {
  let templateInner = ``;
  switch (status) {
    case "success":
      templateInner = ` <i class="fa-solid fa-circle-check"></i>
            <span class="message">This is Success message</span>`;
      break;
    case "warning":
      templateInner = ` <i class="fa-solid fa-circle-exclamation"></i>
            <span class="message">This is warning message</span>`;
      break;
    case "error":
      templateInner = ` <i class="fa-solid fa-triangle-exclamation"></i>
            <span class="message">This is error message</span>`;
      break;
  }

  var toast = document.createElement("div");
  toast.classList.add("toast");
  toast.classList.add(status);
  toast.innerHTML = `${templateInner}
    <span class="countdown"></span>`;
  var toastList = document.querySelector(".toasts");
  toastList.appendChild(toast);
  timeout = timeout || 4000;
  setTimeout(() => {
    toast.style.animation = "slide_hide 2s ease forwards";
  }, timeout);
  setTimeout(() => {
    toast.remove();
  }, timeout + 3000);
}
