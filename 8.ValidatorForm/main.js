var username = document.querySelector("#username");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var confirmPassword = document.querySelector("#confirm-password");
var form = document.querySelector("form");
function showError(input, message) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  parent.classList.add("error");
  small.innerText = message;
}
function showSuccess(input, message) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  parent.classList.remove("error");
  small.innerText = "";
}

function checkEmptyError(listInput) {
  let isEmptyError = true;
  listInput.forEach((input) => {
    input.value = input.value.trim();
    if (!input.value) {
      isEmptyError = false;
      showError(input, "k duoc de trong");
    } else {
      showSuccess(input);
    }
    return isEmptyError;
  });
}

function checkEmailError(input) {
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  input.value = input.value.trim();
  let isEmailErr = regexEmail.test(input.value);
  if (isEmailErr) {
    showSuccess(input);
  } else {
    showError(input, "Email invalid");
  }
  return !isEmailErr;
}

function checkLengthError(input, min, max) {
  input.value = input.value.trim();
  if (input.value.length < min) {
    showError(input, `phai co it nhat ${min} ky tu`);
    return true;
  }
  if (input.value.length > max) {
    showError(input, `khong duoc qua ${min} ky tu`);
    return true;
  }
  // showSuccess(input)
  return false;
}

function checkMatchPassword(passwordInput,cfpassword){
    if(passwordInput.value !== cfpassword.value){
        showError(cfpassword,'MK k trung khop')
        
    }else{
        showSuccess(cfpassword,"")
    }
}

function checkPassword(input){
    const regexPW = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([@_a-zA-Z0-9]{6,})$/
    input.value = input.value.trim();
    let isPassword = regexPW.test(input.value);
    console.log(isPassword);
    if (isPassword) {
      showSuccess(input);
    } else {
      showError(input, "password invalid");
    }
}

form.addEventListener("submit", function (e) {
  // e.preventDefault();

  let isEmptyErr = checkEmptyError([
    username,
    email,
    password,
    confirmPassword,
  ]);
  let isEmailErr = checkEmailError(email);
  let isUsernameLengthErr = checkLengthError(username, 3, 10);
  let isPasswordLengthErr = checkLengthError(password, 3, 10);
  let isConfirmPasswordLengthErr = checkLengthError(confirmPassword)
  let isPassword = checkPassword(password)
  let isCheckPW = checkMatchPassword(password,confirmPassword)
 
});
