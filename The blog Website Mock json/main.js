let allCards = document.querySelector(".all-cards");
let searchinp = document.querySelector("#searchinp");

let MOCK_URL = "http://localhost:8080/blogs";
let filtered=[]
let copyData=[]
async function drawCards() {
  let response = await axios("http://localhost:8080/blogs");
  let data = await response.data;
  copyData=data
  filtered=searchinp.value? filtered: data
  console.log(searchinp.value);
  allCards.innerHTML = "";
  // console.log('3',filtered);
  filtered.forEach((item) => {
    allCards.innerHTML += `

<div class="row ">
<div class="col">
  <div class="card">
    <h4>${item.title}</h4>
    <p>
       ${item.body.slice(0, 100)}... <a href="readmore.html?id=${
      item.id
    }">Read more</a>
    </p>
   
    <p>Written by ${item.author}</p>
    <div class="d-flex gap-2">
      <button id="delete"  onclick=removeCards(${item.id})>Delete</button>
      <a href="nexblog.html?id=${item.id}"  class="editbtn">Edit</a>
    </div>
  </div>
</div>
</div>

`;
  });
}
drawCards();

async function removeCards(id) {
  await axios.delete(`${MOCK_URL}/${id}`);
}

searchinp.addEventListener("input", function (e) {

  filtered=copyData
// console.log('1',filtered);
     filtered = filtered.filter((item) => item.title.toLowerCase().includes(searchinp.value.toLowerCase()));
   
// console.log('2',filtered);
    
    drawCards()
  
});
