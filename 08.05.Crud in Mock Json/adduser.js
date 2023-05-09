let form = document.querySelector("form");
let submitBtn = document.querySelector(".btn-primary");
let inputs = document.querySelectorAll("input");

function check() {
  if (inputs[0].value && inputs[1].value) {
    submitBtn.removeAttribute("disabled");
  } else {
    submitBtn.setAttribute("disabled", "");
  }
}
check();
inputs[0].addEventListener("input", function () {
  check();
});
inputs[1].addEventListener("input", function () {
  check();
});


form.addEventListener("submit", function (e) {
  e.preventDefault();
  let obj = {
    name: inputs[0].value,
    email: inputs[1].value,
  };
  fetch("http://localhost:8080/users", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  window.location.href = "http://127.0.0.1:5500/index.html";
});
