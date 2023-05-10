const MOCK_URL = "http://localhost:8080/users";
let tbody = document.querySelector("tbody");
let submitbtn = document.querySelector("#submitbtn");
let form = document.querySelector("form");
let nameValue = document.querySelector("#nameValue");
let body = document.querySelector("body");
// let search = document.querySelector("#search");
let inputs = document.querySelectorAll("input");
let arr = [];
let copyData = [];
let editId = null;
let editStatus = false;

async function drawTable() {
  let response = await axios(MOCK_URL);
  let data = await response.data;
  arr = data;
  copyData = inputs[3].value ? copyData : data;
  tbody.innerHTML = "";
  copyData.forEach((item) => {
    tbody.innerHTML += `
    <tr>
                <td>${item.firstname}</td>
                <td>${item.lastname}</td>
                <td>${item.email}</td>
                <td>
                  <a class="btn btn-warning" onclick=editUSer("${item.id}")>Edit</a>
                  <a class="btn btn-danger" onclick=deleteBtn("${item.id}")>Delete</a>
                </td>
              </tr>
            
    
    `;
  });
}
drawTable();

let ale = document.querySelector("#alertdiv");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  if (inputs[0].value == "" && inputs[1].value == "" && inputs[2].value == "") {

 
    let alert = document.createElement("div");
    alert.classList.add("alert", "alert-danger");
    
    alert.innerText = "Please fill in all fields";
    ale.append(alert)

    setTimeout(function () {
      alert.remove();
    }, 1000);
    
    return;
  } else {
    if (!editStatus) {
      let obj = {
        firstname: inputs[0].value,
        lastname: inputs[1].value,
        email: inputs[2].value,
      };
      await axios.post(MOCK_URL, obj);
      let alert = document.createElement("div");
      alert.classList.add("alert", "alert-success");
      
      alert.innerText = "success";
      ale.append(alert)
  
      setTimeout(function () {
        alert.remove();
      }, 1000);
    } else {
      let obj = {
        firstname: inputs[0].value,
        lastname: inputs[1].value,
        email: inputs[2].value,
      };
      await axios.patch(`${MOCK_URL}/${editId}`, obj);
      editStatus = false;
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
  });
  submitbtn.innerHTML = "EDIT";
}

async function deleteBtn(id) {
  await axios.delete(`${MOCK_URL}/${id}`);
}

inputs[3].addEventListener("input", function (e) {
  copyData = arr;
  copyData = copyData.filter((item) => {
    return `${item.firstname} ${item.lastname}`
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase());
  });
  drawTable();
});
let sorting = false;
function sort() {
  sorting = !sorting;

  if (!sorting) {
    arr.sort((a, b) => a.firstname.localeCompare(b.firstname));

    drawTable(arr);
  } else {
    arr.sort((a, b) => b.firstname.localeCompare(a.firstname));

    drawTable(arr);
  }
  // console.log(arr);
}
