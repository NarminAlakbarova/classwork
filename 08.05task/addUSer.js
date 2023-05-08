let form = document.querySelector("form");
let sumbitBtn = document.querySelector(".btn-primary");
let inputs = document.querySelectorAll("input");
// sumbitBtn.disabled = true;
form.addEventListener("sumbit", function (e) {
  e.preventDefault();
  if (inputs[0].value && inputs[1].value) {
    // sumbitBtn.disabled = false;
    let obj = {
      address: {
        region: inputs[0].value,
        country: inputs[1].value,
      },
    };
    fetch(`https://northwind.vercel.app/api/suppliers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
  }

  window.location.href = "http://127.0.0.1:5500/index.html";
});
// sumbitBtn.disabled = true;
