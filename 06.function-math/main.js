
///1
const arr1=['a','b','c','d','e','f','j','k','y','u']

function getRandomLetter(arr){
 return arr[Math.floor(Math.random()*arr.length)];
}
console.log(getRandomLetter(arr1));

//2
const arr2=[1,2,3,4,14,5,6,8]
let sum=0
function calcSum() {
for(let item of arr2){
    if(item%2==0){
         sum+=item
    }
}
return sum
}

console.log(calcSum());
//3
const arr3=[-3,-5,-9,3,true,false,-22]
let arry=[]
let getPositiveNam=function(){
    for(i=0;i<arr3.length;i++){
arry.push(Math.abs(arr3[i]))
    }
   return arry
}
console.log(getPositiveNam());
//4
const arr4=[4,9,16,20,24,43,81,100]
let arry4=[]
let calcSquareRoot=()=>{
for(i=0;i<arr4.length;i++){
// arry4.push(Math.trunc(Math.sqrt(arr4[i])))
arry4.push(parseInt(Math.sqrt(arr4[i])))
 
}
return arry4
}
console.log(calcSquareRoot());
//5
const arr5=[
    {
        name:'Narmin',
        surName:'Alakbarova',
        city:'Gence'

    },
    {
        name:'Narmin',
        surName:'Alakbarova',
        city:'Gence' 
    },
    {
        name:'Narmin',
        surName:'Alakbarova',
        city:'Gence'
    }
]

let fillInfo=()=>{
    for(let item of arr5){
        item.name='Ulfet',
        item.surName='Zakirli',
        item.city='Baku'
    }
    return arr5
}
console.log(fillInfo());

//6
let minMax=(arry5)=>{
 let max=arry5[0]
let min=arry5[0]

    for(i=1;i<arry5.length;i++){
if(arry5[i]>max){
    max=arry5[i]
}
else
    min=arry5[i]

    }
    return (`Max:${max} Min:${min}`)
}
console.log(minMax([1,2,3,4,5]));