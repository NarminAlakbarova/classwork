let allinfo = document.querySelector(".allinfo");
let id = new URLSearchParams(window.location.search).get("id");
async function drawContetnt() {
    console.log(id);
  let response = await axios(`http://localhost:8080/blogs/${id}`);
console.log(response);
  allinfo.innerHTML = "";
  
    allinfo.innerHTML = `
    <h2>${response.data.title}</h2>
    <p>${response.data.body} </p>
    <p>${response.data.author}</p>
    <a href="index.html">Go back</a> 


    `;
 
}
drawContetnt();
