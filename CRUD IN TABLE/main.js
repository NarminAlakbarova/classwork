const MOCK_URL = "http://localhost:8080/users";
let tbody = document.querySelector("tbody");
let submitbtn = document.querySelector("#submitbtn");
let form = document.querySelector("form");
let nameValue = document.querySelector("#nameValue");
let body = document.querySelector("body");
let up = document.querySelector(".fa-arrow-up");
let down = document.querySelector(".fa-arrow-down");
// let search = document.querySelector("#search");
let inputs = document.querySelectorAll("input");
let arr = [];
let copyData = [];
let editId = null;
let editStatus = false;
let datevalue = new Date();

function drawTable(array) {
  tbody.innerHTML = "";
  array.forEach((item) => {
    tbody.innerHTML += `
    <tr>
                <td>${item.firstname}</td>
                <td>${item.lastname}</td>
                <td>${item.email}</td>
                <td>${item.number.split("").fill("*",0,-4).join("")}</td>
                <td>
                  <a class="btn btn-warning" onclick=editUSer("${
                    item.id
                  }")>Edit</a>
                  <a class="btn btn-danger" onclick=deleteBtn("${
                    item.id
                  }")>Delete</a>
                  <a class="btn btn-primary" onclick=detailsBtn("${
                    item.firstname
                  }","${item.date}")>details</a>
                </td>
              </tr>
            
    
    `;
  });
}

async function createTable() {
  let response = await axios(MOCK_URL);
  let data = await response.data;
  arr = data;
  copyData = inputs[3].value ? copyData : data;
  drawTable(arr);
}
createTable();
// drawTable(arr);

let ale = document.querySelector("#alertdiv");
function alertDiv(content, color) {
  let alert = document.createElement("div");
  alert.classList.add("alert", `${color}`);
  alert.innerText = `${content}`;
  ale.append(alert);

  setTimeout(function () {
    alert.remove();
  }, 2000);
}
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  let obj = {
    firstname: inputs[0].value,
    lastname: inputs[1].value,
    email: inputs[2].value,
    date: datevalue.toLocaleDateString(),
    number: inputs[3].value,
  };
  if (
    inputs[0].value === "" ||
    inputs[1].value === "" ||
    inputs[2].value === "" ||
    inputs[3].value === ""
  ) {
    alertDiv("Please fill in all the fields!", "alert-warning");

    // return;
  } else {
    if (!editStatus) {
      await axios.post(MOCK_URL, obj);
      alertDiv("Success!", "alert-success");
    } else {
      await axios.patch(`${MOCK_URL}/${editId}`, obj);
      editStatus = false;
      alertDiv("It was successfully edit!", "alert-info");
    }
  }
});
async function editUSer(id) {
  editStatus = true;
  editId = id;
  let edited = arr.filter((elem) => elem.id == editId);
  edited.forEach((item) => {
    inputs[0].value = item.firstname;
    inputs[1].value = item.lastname;
    inputs[2].value = item.email;
    inputs[3].value = item.number;
  });
  submitbtn.innerHTML = "EDIT";
}

async function deleteBtn(id) {
  await axios.delete(`${MOCK_URL}/${id}`);
  alertDiv("information deleted", "alert-danger");
}

inputs[4].addEventListener("input", function (e) {
  copyData = arr;
  copyData = copyData.filter((item) =>
    item.firstname
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase())
  );
  drawTable(copyData);
});
let sorting = true;
async function sort() {
  sorting = !sorting;
  if (!sorting) {
    copyData.sort((a, b) => a.firstname.localeCompare(b.firstname));
    up.style.display = "inline";
    down.style.display = "none";

    drawTable(copyData);
  } else {
    copyData.sort((a, b) => b.firstname.localeCompare(a.firstname));
    up.style.display = "none";
    down.style.display = "inline";
    drawTable(copyData);
  }
}

function detailsBtn(username, userDate) {
  alertDiv(`${username} has been created on ${userDate}`, "alert-primary");
}
