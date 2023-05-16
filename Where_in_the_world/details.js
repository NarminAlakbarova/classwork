let row = document.querySelector(".allDetails");
// let bordercountry = document.querySelector(".bordercountry");
let nameValue = new URLSearchParams(window.location.search).get("name");
async function drawData(item) {
  row.innerHTML = "";

  row.innerHTML += `
        <div class="col-6">
        <img src="${item[0].flags?.png}" alt="" class="detailsimg"/>
      </div>
      <div class="col-6">
        <h2 >${item[0].name?.common}</h2>
        <div class="row">
          <div class="col-6">
            <p>Native Name:${item[0].name?.official}</p>
            <p>Population: ${item[0]?.population}</p>
            <p>Region: ${item[0]?.region}</p>
            ${
              item[0]?.subregion
                ? `<p>Sub Region: ${item[0].subregion}</p>`
                : ""
            }
            ${item[0]?.capital ? `<p>Capital: ${item[0].capital}</p>` : ""}
          </div>
          <div class="col-6">
            <p>Top Level Domain: ${item[0]?.tld}</p>
            ${
              item[0]?.currencies
                ? `<p>Capital: ${Object.keys(item[0].currencies)[0]}</p>`
                : ""
            }
           
       
          </div>
        </div>
        <div class="allborder">
  ${item[0].borders?`<p>Border Countries: <p>${item[0].borders}</p></p>`:""}
          <div class="bordercountry">
         
          </div>
        </div>
      </div>
        
        `;
}
// drawData()
async function getData() {
  try {
    let resp = await axios(`https://restcountries.com/v3.1/name/${nameValue}`);

    let data = resp.data;
    console.log(data);
    drawData(data);
  } catch (error) {
    console.log(error);
  }
}
getData();
