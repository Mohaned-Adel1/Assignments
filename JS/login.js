var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPassword");

if (!localStorage.getItem("registeredUsers")) {
  localStorage.setItem("registeredUsers", JSON.stringify([]));
}

var users = JSON.parse(localStorage.getItem("registeredUsers"));

function login(e) {
  e.preventDefault();
  let isUser = isValidUser();

  if (isUser) {
    let registeredUser = users.find(
      (user) =>
        user.email === loginEmail.value && user.password === loginPassword.value
    );
    if (registeredUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(registeredUser));
      window.location.href = "./html/home.html";
    } else {
      setError(
        loginPassword,
        "User Name Or Password are not Correct please try again"
      );
      setError(loginEmail, " ");
    }
  }
}
function setError(element, message) {
  // debugger;
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
function isValidUser() {
  let isUser = true;
  if (loginEmail.value === "" || loginEmail.value == null) {
    setError(loginEmail, "Email can't be empty , Please enter your email");
    isUser = false;
  } else {
    setSuccess(loginEmail);
    isUser = true;
  }

  if (loginPassword.value === "" || loginPassword.value == null) {
    setError(
      loginPassword,
      "Password can't be empty, please enter your password"
    );
    isUser = false;
  } else {
    setSuccess(loginPassword);
    isUser = true;
  }
  return isUser;
}
