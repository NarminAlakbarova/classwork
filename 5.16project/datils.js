let row=document.querySelector(".allDetails")
let nameValue=new URLSearchParams(window.location.search).get("name")
async function drawData(){
    let resp=await axios(`https://restcountries.com/v3.1/name/${nameValue}`)

    let data=resp.data
    console.log(resp.data);
    row.innerHTML=""
    data.forEach((item)=>{
        row.innerHTML+=`
        <div class="col-6">
        <img src="${item[0].flags.svg}" alt="" />
      </div>
      <div class="col-6">
        <h2 class="my-4">${item[0].name}</h2>
        <div class="row">
          <div class="col-6">
            <p>Native Name:Blegie</p>
            <p>Native Name:Blegie</p>
            <p>Native Name:Blegie</p>
            <p>Native Name:Blegie</p>
            <p>Native Name:Blegie</p>
          </div>
          <div class="col-6">
            <p>Native Name:Blegie</p>
            <p>Native Name:Blegie</p>
            <p>Native Name:Blegie</p>
          </div>
        </div>
        <div class="allborder">
          Border Countries:
          <div class="bordercountry">
            <p>France</p>
            <p>Gemany</p>
            <p>Netherlands</p>
          </div>
        </div>
      </div>
        
        `
    })
 
}
drawData()