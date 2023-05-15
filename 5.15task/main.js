let menuicon=document.querySelector("#menu")
let nav=document.querySelector(".nav-desktop")
menuicon.addEventListener("click",function(){
    nav.classList.toggle("show")
    this.classList.contains("fa-bars")
    ? (this.classList = "fa-solid fa-xmark")
    : (this.classList = "fa-solid fa-bars");

})