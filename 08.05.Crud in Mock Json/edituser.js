const MOCK_URL = "http://localhost:8080/users";
let inputs = document.querySelectorAll("input");
let form = document.querySelector("form");
const user = JSON.parse(localStorage.getItem("edirUSer"));
inputs[0].value = user.name;
inputs[1].value = user.email;
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  try {
    await fetch(`${MOCK_URL}/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: inputs[0].value,
        email: inputs[1].value,
      }),
    });
  } catch (error) {
    console.log(error);
  }
  window.location.href = "http://127.0.0.1:5500/index.html";
});
