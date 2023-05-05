// import { API } from "./api.js";

// //////////task1
// function getAllInfo() {
//   fetch(`${API}`)
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }
// getAllInfo();

// /////////task2
// function getComplateTrue() {
//   fetch(`${API}`)
//     .then((response) => response.json())
//     .then((data) => console.log(data.filter((item) => item.completed === true)))
//     .catch((err) => console.log(err));
// }
// getComplateTrue();

// ////////////////task3
// function filterId() {
//   fetch(`${API}`)
//     .then((response) => response.json())
//     .then((data) => console.log(data.filter((item) => item.userId == 2)))
//     .catch((err) => console.log(err));
// }
// filterId();

// ////////////task4
// function getById(id) {
//   fetch(`${API}/${id}`)
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }

// getById(2);

let tbody = document.querySelector("tbody");



function drawTable() {
  tbody.innerHTML = "";
  fetch(`https://northwind.vercel.app/api/orders`)
    .then((response) => response.json())
    .then((data) =>
      data.forEach((elem) => {
        const tr = document.createElement("tr");
        // const button = document.createElement("button");
        tr.innerHTML = `
        <td>${elem.id}</td>
        <td>${elem.companyName}</td>
        <td>${elem.address?.city}</td>
        <td>${elem.address?.country}</td>
        <td>${elem.address?.phone}</td>
        <button onclick=deleteFunc(${elem.id})>Delete</button>
        `;
        
        tbody.append(tr);
        // tr.append(button);
        // button.innerHTML = "Delete";
        // button.addEventListener("click", () => {
        //   deleteFunc(elem.id);
        // });
      })
    )
    .catch((err) => console.log(err));
}
drawTable();

function deleteFunc(id) {
    fetch(`https://northwind.vercel.app/api/orders/${id}`, {
      method: "DELETE",
    });
    drawTable();
    console.log("Deleted", id);
  }