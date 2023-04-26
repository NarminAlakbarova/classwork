
/////////////////task1
// const arr1 = ['guba', 'mingecevir', 'baku', 'gazag', 'gence', 'shirvan']
// function getUpper(anyArr){
//    return anyArr.map(item=>item[0].toUpperCase()+item.slice(1,-1)+item.at(-1).toUpperCase())
   
// }
// console.log(getUpper(arr1));


////////////////task2
let text = 'We are MERN-Stack developers'
// function stringAndArray(parametr) {
//  return   parametr.split()
// }
// console.log(stringAndArray(text));

///////////task3
// function raplacestr(params) {
//     return params.replace(" MERN-Stack"," Front-end")
// }
// console.log(raplacestr(text));
///////////task4
// function raplaceAll(params) {
//     return params.toLowerCase().replaceAll("e","a")
// }
// console.log(raplaceAll(text));
//////////////task5
// function concatitem(params) {
//     return params.concat(" in Microsoft!" )
// }
// console.log(concatitem(text));

///////////////task6
// 4.Find index of each 'r' and collect them in a new Array called 'newArr'  //[4, 9, 26]
function findIndex(params) {
    let newarr=[]
 params.toLowerCase().split("").map((item,i)=>item=="r"? newarr.push(i):newarr)
 return newarr;
}
console.log(findIndex(text));

// 5.Find index of first 'r' (excepting 'are').  // 9
// let findFirstIndex=text.toLocaleLowerCase().indexOf("r",8)
// console.log(findFirstIndex);

// 6.Find out vowels in 'text' and add them to 'newArr' which contains unique values. //['e','a','o']
 let vowels = ['a', 'i', 'o', 'u', 'e']
let newArr=[];
let findUnique=text.toLocaleLowerCase().match(/[aeiou]/gi)
// let findUnique=text.toLocaleLowerCase().split("").map(item=>vowels.includes(item)?newArr.push(item):newArr)

console.log(findUnique);