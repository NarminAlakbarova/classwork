const MOCK_URL = "http://localhost:8080/users";
let row = document.querySelector(".all-card");
let addUserBtn = document.querySelector("#addUserform");
async function drawCard() {
  let response = await fetch(`${MOCK_URL}`);
  let data = await response.json();
  row.innerHTML = "";
  data.forEach((item) => {
    row.innerHTML += `
<span class="col col-6  ">
        <div class="card " style="width: 30rem">
          <div class="card-body d-flex  ">
        <div>
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">
          ${item.email}
          </p>
        </div >
            <div class="d-flex gap-3 "><i class="fa-solid fa-pen" onclick=editCard("${item.id}","${item.name}","${item.email}") id="${item.id}"></i>
              <i class="fa-solid fa-trash" onclick=deleteCard("${item.id}") id="${item.id}"></i></div>
          </div>
        </div>
      </span>


`;
  });
}
drawCard();

async function deleteCard(id) {
  try {
    let resp = await fetch(`${MOCK_URL}/${id}`, {
      method: "DELETE",
    });
    let data = await resp.json();
    document.querySelector(`#${id}`).closest("span").remove();
  } catch (error) {
    console.log(error);
  }
}

function adduser() {
  window.location.href = "http://127.0.0.1:5500/adduser.html";
}

async function editCard(id,name,email){
let user={id,name,email}
localStorage.setItem("edirUSer",JSON.stringify(user))
    
    window.location.href="http://127.0.0.1:5500/edituser.html"
}