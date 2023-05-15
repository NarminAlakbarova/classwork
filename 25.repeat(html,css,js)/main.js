let menuIcon = document.querySelector("#menu");
let closeMark = document.querySelector("#close-mark");
let burgerMenu = document.querySelector(".burger-menu");

menuIcon.addEventListener("click", function () {
  burgerMenu.classList.toggle("show");
});
closeMark.addEventListener("click", function () {
  burgerMenu.classList.toggle("show");
});
