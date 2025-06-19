var userName = document.getElementById("userName");
var userPassword = document.getElementById("userPassword");
var userEmail = document.getElementById("userEmail");
var form = document.getElementById("form");

if (!localStorage.getItem("registeredUsers")) {
  localStorage.setItem("registeredUsers", JSON.stringify([]));
}

var users = JSON.parse(localStorage.getItem("registeredUsers"));
function signUp(e) {
  e.preventDefault();
  let isValidForm = validateInputs();
  if (isValidForm) {
    let newUser = {
      name: userName.value,
      email: userEmail.value,
      password: userPassword.value,
    };
    users.push(newUser);
    localStorage.setItem("registeredUsers", JSON.stringify(users));
    userName.value = "";
    userEmail.value = "";
    userPassword.value = "";

    window.location.href = "./index.html";
  }
}

function setError(element, message) {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
}

function setSuccess(element) {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
}

function validateInputs() {
  let isValidInputs = true;
  const usernameValue = userName.value;
  const emailValue = userEmail.value;
  const passwordValue = userPassword.value;

  if (usernameValue === "") {
    setError(userName, "Username is required");
    isValidInputs = false;
  } else {
    setSuccess(userName);
  }

  if (emailValue === "") {
    setError(userEmail, "Email is required");
    isValidInputs = false;
  } else if (!isValidEmail(emailValue)) {
    setError(userEmail, "Provide a valid email address");
    isValidInputs = false;
  } else {
    setSuccess(userEmail);
  }

  if (passwordValue === "") {
    setError(userPassword, "Password is required");
    isValidInputs = false;
  } else if (passwordValue.length < 8) {
    setError(userPassword, "Password must be at least 8 character.");
    isValidInputs = false;
  } else {
    setSuccess(userPassword);
  }
  return isValidInputs;
}
function isValidEmail(email) {
  const emailRegEx =
    /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;

  return emailRegEx.test(String(email).toLowerCase());
}
