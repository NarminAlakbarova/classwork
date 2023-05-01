/////////////task1
const arr = ["6", 8, NaN, "0", 5, 4, "true", false, 7, "a", undefined, 8, true];
// let falsyValue=(newArr)=>{
//     let trueValue=[];
//     for(i=0;i<newArr.length;i++){
//         if(!newArr[i]){
//             trueValue.push(newArr[i])
//         }
//     }
//     return trueValue
// }
// console.log(falsyValue(arr));

//////////////task2
// let stringValue=(newArr)=>{
//     let strValue=[];
//     for(i=0;i<newArr.length;i++){
//         if(typeof newArr[i]=="string"){
//             strValue.push(newArr[i])
//         }
//     }
//     return strValue
// }
// console.log(stringValue(arr));

////////////////task3
// let sliceArr=(newArr)=>{
//     let slice=[];
//     for(i=3;i<=7;i++){
//        slice.push(newArr[i])
//     }
//     return slice
// }
// console.log(sliceArr(arr));

////////////task4
// let sumArr = (newArr) => {
//   let sum = 0;
//   for (i = 0; i < newArr.length; i++) {
//     if (newArr[i] === true) {
//       continue;
//     }
//     if (newArr[i] === Number(newArr[i])) {
//       sum += newArr[i];
//     }
//   }
//   return sum;
// };
// console.log(sumArr(arr));

//////////////////task5

// let findLastIndex = (newArr) => {
// let index=[];
//   for (i = newArr.length-1; i< newArr.length; i--) {
//     if (newArr[i]===8) {
//     // index.push(newArr[i])
//     console.log(newArr[i]);
//     }

//   }
//   return index;
// let index=0
// for(i=0;i<newArr.length;i++){
//     if(newArr[i]==8){
//         index=0
//         index+=i
//     }
// }
// return index
// };
// console.log(findLastIndex(arr));

//////////////////task6

// let reverseArr=(newArr)=>{
//     let reverse=[]
//     for(i=newArr.length-1;i>=0;i--){
//         reverse.push(newArr[i])
//     }
//     return reverse
// }
// console.log(reverseArr(arr));

///////////////task7

// const arrNum = [3, 1, 22, 0, 12, 11, 9, 8, 10, 14, 41, 55, 51];

// function sortArr(newArr) {
//   for (i = 0; i < newArr.length; i++) {
//     if (newArr[i] > newArr[i + 1]) {
//       let num = newArr[i];
//       newArr[i] = newArr[i + 1];
//       newArr[i + 1] = num;

//       i = -1;
//     }
//   }
//   return newArr;
// }
// console.log(sortArr(arrNum));

////////////////task8
const arrLetters=['g','d','a','c','j','b','e']
function sortArr(newArr) {
  for (i = 0; i < newArr.length; i++) {
    if (newArr[i] > newArr[i + 1]) {
      let num = newArr[i];
      newArr[i] = newArr[i + 1];
      newArr[i + 1] = num;
      
      i = -1;
    }
  }
  return newArr;
}
console.log(sortArr(arrLetters));

//////////////////task 9
// const arr9=[[1,2],[3,4,5],[6,7,8,9]]
// let output = [];
// let flattenArray = (arr) => {
//   for(let a of arr) {
//    Array.isArray(a) ? flattenArray(a) : output.push(a);
//   }
//   return output;
// }
// console.log(flattenArray(arr9));

// function calc(num1, operator, num2) {
//   let result;
//   if (operator == "+") {
//     result = num1 + num2;
//   } else if (operator == "-") {
//     result = num1 - num2;
//   } else if (operator == "*") {
//     result = num1 * num2;
//   } else if (operator == "/") {
//     result = num1 / num2;
//   }
//   return result;
// }
// console.log(calc(2, "+", 2));
 
// console.log(calc(2, "+", 2));
