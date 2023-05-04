let todos = JSON.parse(localStorage.getItem("todoList")) ?? [];

let input = document.querySelector(".form-control");
let addBtn = document.querySelector("#add");
let listGroup = document.querySelector(".list-group");
addBtn.disabled = true;
input.addEventListener("input", function (e) {
  if (e.target.value) {
    addBtn.disabled = false;
  } else {
    addBtn.disabled = true;
  }
});

function create() {
  listGroup.innerHTML = "";
  todos.forEach((item) => {
    listGroup.innerHTML += `
    <li class="list-group-item d-flex justify-content-between my-4">
            <div>
              <input
                class="form-check-input me-1"
                type="checkbox"
                value=""
                aria-label="..."
              />
              <label for="">${item.todoText}</label>
            </div>
            <div>
              <button type="button" class="btn btn-success" onclick=edit(${item.id})>edit</button>
              <button type="button" class="btn btn-danger" onclick=remove(${item.id})>delete</button>
            </div>
          </li>
    
    
    `;
  });
}
addBtn.addEventListener("click", function () {
  let obj = {
    id: Date.now(),
    todoText: input.value,
  };
  todos.push(obj);
  localStorage.setItem("todoList", JSON.stringify(todos));
  create();
  input.value = "";
});
window.addEventListener("keyup", function (event) {
  if (event.code === "Enter") {
    input.value && create();
  }
});

function remove(id) {
  todos = todos.filter((obj) => obj.id != id);
  localStorage.setItem("todoList", JSON.stringify(todos));
  create();
}

function edit(id) {
  let edit = todos.find((obj) => obj.id == id);
  input.value = edit.todoText;
  addBtn.innerHTML = "EDIT";
  addBtn.onclick = function () {
    let finish = todos.find((obj) => obj.id == id);
    finish.todoText = input.value;
    localStorage.setItem("todoList", JSON.stringify(todos));
    create();
  };
}
