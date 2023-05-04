let signUpform = JSON.parse(localStorage.getItem("signUpform")) ?? [];

let form = document.querySelector("#signupform");
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let checkBtn = document.querySelector(".check");
let submit = document.querySelector("#submit");

function check() {
  if (name.value && email.value && password.value && checkBtn.checked) {
      submit.removeAttribute("disabled");
    } else {
      submit.setAttribute("disabled", "");
  }
}
check();

name.addEventListener("input", function () {
  check();
});
email.addEventListener("input", function () {
  check();
});
password.addEventListener("input", function () {
  check();
});
checkBtn.addEventListener("input", function () {
  check();
});

submit.addEventListener("click", function (e) {
  e.preventDefault();

  let obj = {
    name: name.value,
    email: email.value,
    password: password.value,
    checkBtn: checkBtn.checked,
    id:Date.now()
  };

  signUpform.push(obj);
  localStorage.setItem("signUpform", JSON.stringify(signUpform));
  window.location.href="http://127.0.0.1:5500/user.html"
});
