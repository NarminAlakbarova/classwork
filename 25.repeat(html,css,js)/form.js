let inputs = document.querySelectorAll("input");
let form = document.querySelector("form");
let id = new URLSearchParams(window.location.search).get("id");
const BASE_URL = "http://localhost:8000/users";

let dateValue = new Date();

axios(`${BASE_URL}/${id}`).then((resp) => {
  inputs[0].value = resp.data.name;
  inputs[1].value = resp.data.surname;
  inputs[2].value = resp.data.email;
//   inputs[3].value=resp.data.userphoto

});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let obj = {
    name: inputs[0].value,
    surname: inputs[1].value,
    email: inputs[2].value,
    date: dateValue.toLocaleString(),
    userphoto:`./img/${inputs[3].value.split("\\")[2]}`
  };
  if (id) {
    axios.patch(`${BASE_URL}/${id}`, obj);
  } else {
    axios.post(BASE_URL, obj);
  }
  window.location.href = "http://127.0.0.1:5500/index.html";
});
