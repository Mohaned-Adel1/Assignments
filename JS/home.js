if (!localStorage.getItem("loggedInUser")) {
  window.location.href = "./index.html";
}

var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
document.getElementById(
  "welcomeHeader"
).innerHTML = `Welcome ${loggedInUser.name}`;

function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "./index.html";
}
