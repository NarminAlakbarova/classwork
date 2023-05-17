let row = document.querySelector(".allcards");
// let cards = document.querySelector(".card-body");
let search = document.querySelector("#search");
let loading = document.querySelector(".loading");
let select = document.querySelector("#selection");
let darkMode = document.querySelector("#light-modebtn");
let body = document.querySelector("body");
const BASE_URL = "https://restcountries.com/v2/all";
function drawTable(array) {
  row.innerHTML = "";
  array.forEach((item) => {
    row.innerHTML += `
        
        
        <div class="col col-xl-3 col-sm-12 my-3 ">
        <a  href="details.html?name=${item.name}" class="darkcol">
          <div class="card" style="width: 16rem">
            <img src="${item.flags.svg}" style="height:200px" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text"><b>Papulation:</b> ${item.population}</p>
              <p class="card-text"><b>Region: </b>${item.region}</p>
              <p class="card-text"><b>Capital:</b> ${item.capital}</p>
            </div>
          </div>
        </a>
      </div>
        
        `;
  });
}
async function getAllData() {
  let response = await axios(BASE_URL);
  let data = response.data;
  drawTable(data);
}
getAllData();

search.addEventListener("input", async function (e) {
  row.innerHTML = "";
  loading.style.display = "flex";
  await axios(BASE_URL).then((resp) => {
    let filteredData = resp.data.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    loading.style.display = "none";
    drawTable(filteredData);
  });
});

window.onload = function () {
  row.innerHTML = "";
  loading.style.display = "flex";
  axios(BASE_URL).then((res) => {
    loading.style.display = "none";
    drawTable(res.data);
  });
};

select.addEventListener("change", async function (e) {
row.innerHTML=""
  let country = e.target.value;
  loading.style.display = "flex";
  await axios(BASE_URL).then((resp) => {
    let filteredSelect = resp.data.filter((item) =>
      item.region.includes(country)
    );
    loading.style.display = "none";
drawTable(filteredSelect)
  });
});
darkMode.addEventListener("click",function(){
  body.classList.toggle("dark")
  this.classList.toggle("dark-modebtn")
  // cards.classList.toggle("dark-card")
})