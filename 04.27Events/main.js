let nameInp = document.querySelector("#nameinp");
let surnameInp = document.querySelector("#surnameinp");
let emailInp = document.querySelector("#emailinp");
let passwordInp = document.querySelector("#passwordinp");
let checkboxInp = document.querySelector("#checkboxinp");
let checkedP = document.querySelector("#checked");
let radioIpn = document.querySelectorAll('[name="radio"]');
let submitBtn = document.querySelector("#submitbtn");

nameInp.addEventListener("focus", function () {
  this.style.backgroundColor = "rgb(0,0,0,0.5)";
  this.style.color = "white";
  if (nameInp.value && surnameInp.value && checkboxInp.checked) {
    submitBtn.removeAttribute("disabled");
  } else {
    submitBtn.disabled = true;
  }
});
nameInp.addEventListener("mouseout", function () {
  this.style.backgroundColor = "transparent";
});
surnameInp.addEventListener("mouseover", function () {
  this.style.backgroundColor = "green";
});
surnameInp.addEventListener("mouseout", function () {
  this.style.backgroundColor = "transparent";
});
surnameInp.addEventListener("focus", function () {
  if (nameInp.value && surnameInp.value && checkboxInp.checked) {
    submitBtn.removeAttribute("disabled");
  } else {
    submitBtn.disabled = true;
  }
});

emailInp.addEventListener("contextmenu", function () {
  this.style.backgroundColor = "red";
});
passwordInp.addEventListener("focus", function (e) {
  e.target.value = "nerminnn";
});

checkedP.style.visibility = "hidden";
checkboxInp.addEventListener("change", function () {
  if (!this.checked) {
    checkedP.style.visibility = "hidden";
  } else {
    checkedP.style.visibility = "visible";
  }
});
checkboxInp.addEventListener("click", function () {
  if (nameInp.value && surnameInp.value && checkboxInp.checked) {
    submitBtn.removeAttribute("disabled");
  } else {
    submitBtn.disabled = true;
  }
});

radioIpn.forEach((item) => {
  item.addEventListener("click", function () {
    this.style.accentColor = "blue";
    setTimeout(() => {
      alert("thanks");
    }, 100);
  });
});
