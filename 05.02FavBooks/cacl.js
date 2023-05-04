let basketBooks = JSON.parse(localStorage.getItem("basket")) ?? [];

let container = document.querySelector(".container");
let basket = document.querySelector(".basket");
let calcBtn = document.querySelector(".calc");

basketBooks.forEach((item) => {
  container.innerHTML += `
    <div class="row">
    <div class="col ">
        <h3>Title:${item.title}</h3>
        <p>publisher:${item.publisher}</p>
        <p>order:${item.year}</p>
        <p>count:</p>
    </div>
</div>
    
    `;
});
let result=0
calcBtn.addEventListener("click",function(){
result=basketBooks.reduce((sum,total)=>sum+ +total.year,0)
basket.innerText=result

})