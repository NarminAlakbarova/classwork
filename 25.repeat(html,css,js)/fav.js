let user = JSON.parse(localStorage.getItem("users")) ?? [];
let row = document.querySelector(".cards");
function listFavChar() {
  row.innerHTML = "";
  user.forEach((item) => {
    row.innerHTML += `
        
     
            <span class="card">
            <img src="${item.userphoto}" alt="" class="favimg">
         <div class="img-titlediv">
         <p class="title">${item.name} ${item.surname}</p>
         <hr>
         <p>${item.email}</p>
         <p>${item.date}</p>
         <button class="btn btn-primary" onclick=deletebtn("${item.id}",this)>Remove Fav</button>
         </div>
            </span>
        
        
        `;
  });
}
listFavChar();

function deletebtn(id,btn){
user=user.filter((item)=>item.id!=id)
localStorage.setItem("users",JSON.stringify(user))
btn.closest("span").remove()
listFavChar()
}