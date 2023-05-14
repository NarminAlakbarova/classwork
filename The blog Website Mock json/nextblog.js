let input = document.querySelector("#inp");
let textArea = document.querySelector("#textarea");
let selection = document.querySelector("#selection");
let form = document.querySelector("form");
let heading = document.querySelector(".heading");
let author;
let id = new URLSearchParams(window.location.search).get("id");
// console.log(id);
// let res=axios(`http://localhost:8080/blogs/${id}`)
selection.addEventListener("change", function (e) {
  author = e.target.value;
});
axios(`http://localhost:8080/blogs/${id}`).then((res) => {
  input.value = res.data.title;
  textArea.value = res.data.body;
  selection.value = res.data.author;
});
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (id) {
    // heading.innerText = "EDIT BLOG";
    console.log(id);

    let edit = {
      title: input.value,
      body: textArea.value,
      author: author || "Lorem",
    };
    axios.patch(`http://localhost:8080/blogs/${id}`, edit);
  } else {
    let obj = {
      title: input.value,
      body: textArea.value,
      author: author || "Lorem",
    };
    axios.post(`http://localhost:8080/blogs`, obj);
  }
  window.location = "index.html";
});
