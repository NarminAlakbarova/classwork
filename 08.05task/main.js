let addBtn=document.querySelector("#addUser")
let row = document.querySelector(".all-card");
async function createCard() {
  let response = await fetch("https://northwind.vercel.app/api/suppliers");
  let data = await response.json();
  data.forEach((item) => {
    row.innerHTML += `
        
        <span class="col col-6  ">
        <div class="card " style="width: 30rem">
          <div class="card-body d-flex  ">
        <div>
          <h5 class="card-title">${item.address?.region}</h5>
          <p class="card-text">
          ${item.address?.country}
          </p>
        </div >
            <div class="d-flex gap-2 "><i class="fa-solid fa-pen" ></i>
              <i class="fa-solid fa-trash" onclick=deleteCard(${item.id}) id="${item.id}"></i></div>
          </div>
        </div>
      </span>
        
        `;
  });
}
createCard();

async function deleteCard(id) {
await fetch(`https://northwind.vercel.app/api/suppliers/${id}`, {
    method: "DELETE",
  });
//   document.querySelector(`#${id}`).closest("span").remove()
createCard()
}

addBtn.addEventListener("click",function(){
    window.location.href="http://127.0.0.1:5500/ADDUSER.HTML?"
})