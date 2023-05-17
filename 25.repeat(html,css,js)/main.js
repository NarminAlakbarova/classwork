let menuIcon = document.querySelector("#menu");
let closeMark = document.querySelector("#close-mark");
let burgerMenu = document.querySelector(".burger-menu");
let tbody = document.querySelector("tbody");
let cards = document.querySelector(".cards");
const BASE_URL = "http://localhost:8000/users";
menuIcon.addEventListener("click", function () {
  burgerMenu.classList.toggle("show");
});
closeMark.addEventListener("click", function () {
  burgerMenu.classList.toggle("show");
});

function drawCrud(array) {
  tbody.innerHTML = "";
  // document.body.createElement("div")

  array.forEach((item) => {
    tbody.innerHTML += `
    <tr>
    <td>${item.id}</td>
    <td><img src="${item.userphoto}" alt="" class="table-img" /></td>
    <td>${item.name}</td>
    <td>${item.surname}</td>
    <td>${item.email}</td>
    <td>${item.date}</td>
    <td>
      <a href="form.html?id=${item.id}" class="btn btn-success">Edit</a>
      <a href="#" class="btn btn-danger" onclick=deleteElem(${item.id})>Delete</a>
      <a href="#" class="btn btn-primary" onclick=editBtn(${item.id})>Add Fav</a>
    </td>
  </tr>
    `;
  });
}

function drawCards(array){
cards.innerHTML=""
array.forEach((item)=>{
  cards.innerHTML+=`
  <div class="card my-2">
  <div class="text">
    <span style="color: blue">Id:${item.id}</span>
    <span style="color: green">Date: ${item.date}</span>
  </div>
  <div class="img-btn">
    <div class="img-text">
      <img src="${item.userphoto}" alt="" />
      <div>
        <p>${item.name}</p>
        <p>${item.email}</p>
      </div>
    </div>
    <div class="btns my-3">
      <a href="form.html?id=${item.id}" class="btn btn-success">Edit</a>
      <a href="#" class="btn btn-danger" onclick=deleteElem(${item.id})>Delete</a>
    </div>
  </div>
</div>
  `
})
}
async function GetAllData() {
  let resp = await axios(BASE_URL);
  let data = resp.data;
  drawCrud(data);
  drawCards(data)
}
GetAllData();

async function deleteElem(id) {
  await axios.delete(`${BASE_URL}/${id}`);
  drawCrud();
}
let user=JSON.parse(localStorage.getItem("users"))??[]

async function editBtn(id){
  let resp=await axios(`${BASE_URL}/${id}`)
  let data=resp.data
  let selectuser=user.find((elem)=>elem.id==id)
user.includes(selectuser)
if(!user.includes(selectuser)){
  // let favuser=data.find((elem)=>elem.id==item.id)
user.push(data)
localStorage.setItem("users",JSON.stringify(user))
}else{
  alert("You alredy added this character!")
}
}