let todos = JSON.parse(localStorage.getItem("todoList")) ?? [];

let input = document.querySelector(".form-control");
let addBtn = document.querySelector("#add");
let listGroup = document.querySelector(".list-group");
let checkInput = document.querySelector(".form-check-input");
let txt = document.querySelector(".txt");
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
                id="${item.id}" onclick=check(${item.id}) ${
      item.checked && "checked"
    }
               
              />
              <label for="" class="${item.checked && "line"}">${
      item.todoText
    }</label>
            </div>
            <div>
              <button type="button" class="btn btn-success" onclick=edit(${
                item.id
              })>edit</button>
              <button type="button" class="btn btn-danger" onclick=remove(${
                item.id
              })>delete</button>
            </div>
          </li>
    
    
    `;
  });
}

function check(id) {
  let todosObj = todos.find((item) => item.id == id);
  let findIndex = todos.findIndex((item) => item.id == id);
  todosObj.checked ? (todosObj.checked = false) : (todosObj.checked = true);
  todos.splice(findIndex, 1, todosObj);
  localStorage.setItem("todoList", JSON.stringify(todos));
  create();
}
let addvalue = false;
addBtn.addEventListener("click", function () {
  addBtn.innerText = "Add";
  let obj = {
    id: Date.now(),
    todoText: input.value,
  };
  if (!addvalue) {
    todos.push(obj);
    localStorage.setItem("todoList", JSON.stringify(todos));
    create();
    input.value = "";
  }
  addBtn.disabled = true;
});
function edit(id) {
  let edit = todos.filter((obj) => obj.id == id)[0];
  input.value = edit.todoText;
  addBtn.innerText = "Edit";
  if (addvalue) {
    let finish = todos.find((obj) => obj.id == id);
    finish.todoText = input.value;
    localStorage.setItem("todoList", JSON.stringify(todos));
    create();
    input.value = "";
  }
}

listGroup.addEventListener("click", function (e) {
  if (e.target.tagName === "INPUT" && e.target.type === "checkbox") {
    let parentLi = e.target.closest("li");
    parentLi.classList.toggle("completed");
  }
});
function remove(id) {
  todos = todos.filter((obj) => obj.id != id);
  localStorage.setItem("todoList", JSON.stringify(todos));
  create();
}

window.onload = function () {
  create();
};
