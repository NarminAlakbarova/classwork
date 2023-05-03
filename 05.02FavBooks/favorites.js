let favorites = JSON.parse(localStorage.getItem("favBooks")) ?? [];
let row = document.querySelector(".row");

favorites.forEach((item) => {
  row.innerHTML += `
    <span class="col-3 my-4">
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text">
         Publisher: ${item.publisher}
        </p>
         <i><p>Year: ${item.year}</p></i>
        <button class="btn btn-danger" id=${item.id}>Remove</button>
      </div>
    </div>
  </span>`;
});

let allRemoveBtn = document.querySelectorAll(".btn-danger");
allRemoveBtn.forEach((item) => {
  item.addEventListener("click", function () {
    favorites = JSON.parse(localStorage.getItem("favBooks"));
    let updateFavBooks = favorites.filter((elem) => elem.id != item.id);
    localStorage.setItem("favBooks", JSON.stringify(updateFavBooks));
    this.closest("span").remove();
  });
});
