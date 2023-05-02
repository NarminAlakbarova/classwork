/////////////////task1

// let btn = document.querySelector("#btn");
// let delBtn = document.querySelector("#delete");
// let empBtn = document.querySelector("#empty");
// // let delete=document.querySelector("#delete")
// delBtn.addEventListener("click",function(){
//     localStorage.removeItem("firstName")

// })
// empBtn.addEventListener("click",function(){
//     localStorage.clear()
// })
// btn.addEventListener("click", function () {
//   let firstName = "Kamran";
//   let lastName = "Alakbarov";
//   let age = "23";
//   localStorage.setItem("firstName", firstName);
//   localStorage.setItem("lastName", lastName);
//   localStorage.setItem("age", age);

//////////////////task1.1
//   console.log(localStorage.length);

///////////task2
//   for (i = 0; i < localStorage.length; i++) {
//     console.log(localStorage.key(i));
//   }
//////////task3
// let keys = Object.keys(localStorage);
// for(let i of keys){
//   console.log(localStorage.getItem(i));
// }

///////task4
// console.log(localStorage.key(0));
/////////////task4.1
//   let arr = [];
//   for (i = 0; i < localStorage.length; i++) {
//     arr.push(localStorage.key(i));
//   }
//   console.log(arr);

///////////task5
// console.log(localStorage.getItem(localStorage.key(0)));

//////////task5.1
//   let arr = [];
//   for (i = 0; i < localStorage.length; i++) {
//     arr.push(localStorage.getItem(localStorage.key(i)));
//   }
//   console.log(arr);
// });

let form = document.querySelector("form");
// let inp = document.querySelectorAll(".form-control");
let check = document.querySelector("#exampleCheck1");
let userName = document.querySelector("#username");
let userEmail = document.querySelector("#email");
let password = document.querySelector("#password");
  
let userData = JSON.parse(localStorage.getItem("usersData")) ?? [];
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (userName.value && userEmail.value) {
    let obj = {
      firstName: userName.value,
      email: userEmail.value,
      password: password.value,
      check: check.checked,
    };
    userData.push(obj);
    localStorage.setItem("userData", JSON.stringify(userData));
  }
});
let keys = Object.keys(localStorage);
for (let i of keys) {
  console.log(JSON.parse(localStorage.getItem(i)));
}
