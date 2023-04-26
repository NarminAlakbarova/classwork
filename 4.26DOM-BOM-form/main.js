let startBtn = document.createElement("button");
let time = document.createElement("p");
let form = document.createElement("form");
let nameLabel = document.createElement("lebel");
let nameInp = document.createElement("input");
let surLabel = document.createElement("label");
let surInp = document.createElement("input");
let checkInp = document.createElement("input");
let radioInp1 = document.createElement("input");
let radioInp2 = document.createElement("input");
let submitBtn = document.createElement("button");
let nextPageBtn = document.createElement("button");

document.body.append(startBtn);
document.body.append(time);
document.body.append(form);
document.body.append(nextPageBtn);
form.append(nameLabel);
form.append(nameInp);
form.append(surLabel);
form.append(surInp);
form.append(checkInp);
form.append(radioInp1);
form.append(radioInp2);
form.append(submitBtn);

nameLabel.innerHTML = "<strong>Name</strong>";
surLabel.innerHTML = "<strong>Surname</strong>";
submitBtn.innerHTML = "Submit";
startBtn.innerText = "Let's start...";
nextPageBtn.innerText = "Next Page>";

let count = 15;
time.innerHTML = `00:${count}`;
let interval;
startBtn.addEventListener("click", function () {
  count = 15;
  startBtn.setAttribute("disabled", "");
  submitBtn.removeAttribute("disabled");
  interval = setInterval(() => {
    time.innerHTML = `00:${--count}`;
    time.style.color = "blue";
    time.style.borderColor = "blue";

    if (count <= 10) {
      time.style.borderColor = "red";
      time.style.color = "red";
    }
    if (count == 0) {
      time.innerHTML = "You missed :(";
      clearInterval(interval);
      submitBtn.setAttribute("disabled", "");
      startBtn.removeAttribute("disabled");
    }
  }, 1000);
});
submitBtn.setAttribute("disabled", "");
submitBtn.addEventListener("click", function () {
  startBtn.removeAttribute("disabled");
  nextPageBtn.removeAttribute("disabled");
});

nextPageBtn.setAttribute("disabled", "");
nextPageBtn.addEventListener("click", function () {
  alert("finish");
});
checkInp.type = "checkbox";
checkInp.style.accentColor = "red";
checkInp.required = true;

radioInp1.type = "radio";
radioInp1.style.accentColor = "red";
radioInp1.required = true;

radioInp2.type = "radio";
radioInp2.style.accentColor = "red";
radioInp2.required = true;

nameInp.placeholder = "Enter your name...";
nameInp.style.padding = "5px";

surInp.placeholder = "Enter your surname...";
surInp.style.padding = "5px";

form.style.display = "flex";
form.style.flexDirection = "column";
form.style.justifyContent = "center";
form.style.alignItems = "center";
form.style.height = "90vh";
form.style.border = "1px dotted black";
form.style.rowGap = "10px";

time.style.width = "90px";
time.style.padding = "10px";
time.style.border = "1px solid black";
time.style.textAlign = "center";

nameInp.required = true;
surInp.required = true;
radioInp1.name = "n";
radioInp2.name = "n";
