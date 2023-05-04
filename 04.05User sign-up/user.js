let users = JSON.parse(localStorage.getItem("signUpform")) ?? [];
let addUserBtn = document.querySelector("#adduser");
let row = document.querySelector(".row");
addUserBtn.addEventListener("click", function () {
  window.location.href = "http://127.0.0.1:5500/index.html";
});
function createUser() {
  users.forEach((item) => {
    let col = document.createElement("div");
    col.setAttribute("class", "col-4");
    col.innerHTML = `
    <div class="card">
    <h1>User</h1>
    <p id="user">User</p>
    <p id="user">Name:${item.name}</p>
    <p id="user">Email:${item.email}</p>
    <button id="delete" class="btn btn-danger " onclick=remove(${item.id}) >Delete</button>
  </div>
    `;
    row.append(col);
  });
}
createUser();
function remove(id) {
  users = users.filter((obj) => obj.id != id);
  localStorage.setItem("signUpform", JSON.stringify(users));
  createUser();
}
