let tbody = document.querySelector("tbody");
let search = document.querySelector(".form-control");
let loading = document.querySelector(".loading");
let copyData1 = [];
let copyData2 = [];

function drawTable(data) {
  tbody.innerHTML = "";
  data.forEach((element) => {
    tbody.innerHTML += `
        <tr>
            <td>${element.name}</td>
            <td>${element.country}</td>
            <td>${element.domains[0]}</td>
            <td><a href="${element.web_pages[0]}" target="_blank">${element.web_pages[0]}</a></td>
        </tr>
        `;
  });
}

window.onload = function () {
  tbody.innerHTML = "";
  loading.style.display = "flex";
 copyData1= axios("http://universities.hipolabs.com/search?country=Azerbaijan").then(
    (resp) => {
      loading.style.display = "none";
      drawTable(resp.data);
    }
  );
};

search.addEventListener("input", function (e) {
  tbody.innerHTML = "";
  loading.style.display = "flex";
  axios(
    `http://universities.hipolabs.com/search?country=Azerbaijan&name=${e.target.value}`
  ).then((res) => {
    loading.style.display = "none";

    drawTable(res.data);
  });
});

