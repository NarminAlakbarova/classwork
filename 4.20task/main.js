
// 1.Array method/////////////////////////////////////////////////////////////////////////////////////////////////////////////
const arr = ['d', 7, '1', '7', 7, 0, 'c', 'a', undefined, 7, '3', false, 1, null]

// 1.1 Splice 'arr' //  [7, '1', '7', 7, 0, 'c', 'a', undefined, 7, '3', false, 1]
console.log(arr.splice(1,arr.length-2));   
// / 1.2 Show only last three values of 'arr' // [ false, 1, null]
// console.log(arr.slice(-3));
// 1.3 Concat [true,'8','myName'] in front of the 'arr'. //[true,'8','myName','d', 7 '1', '7', 7, 0, 'c', 'a', undefined, 7, '3', false, 1, null]
// let array= [true,'8','myName']
// console.log(array.concat(arr));

// 1.4 Find second 7's index. //4
// console.log(arr.indexOf(7,2));

// 1.5 Filter only true value // ['d', 7, '1', '7', 7, 'c', 'a', 7, '3', 1]
// function filterArr(arr) {
//   return  arr.filter(Boolean)
// }
// console.log(filterArr(arr));

// 1.6 Sum only integer values of 'arr' //22
// function sumOnlyIntenger(array) {
   
//     return array.filter((item)=> Number.isInteger(item) ).reduce((acc,curr)=>acc+curr,0)
// }
// console.log(sumOnlyIntenger(arr));

// 1.7 Find falsy values' length //4
// function findFalsyValues(array) {
//   return  array.filter((item)=>!Boolean(item)).length
// }
// console.log(findFalsyValues(arr));

// 2.Object vs Array///////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2.1 Create a function called 'findSmallest(inks)', that find out min value of obj.

// function findSmallest(inks){
// let arr=Object.values(inks)
// let min=Math.min(...arr)
// return min
// }

//rigth
// console.log(findSmallest({
//     "cyan": 23,
//     "magenta": 12,
//     "yellow": 10
// })); // 10

// console.log(findSmallest({
//     "cyan": 432,
//     "magenta": 543,
//     "yellow": 777
// }));  // 432

// console.log(findSmallest({
//     "cyan": 700,
//     "magenta": 700,
//     "yellow": 0
// })); // 0


// 2.2 Create a function called maxNums that find out max num of each arr

// console.log(maxNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])); //[7, 90, 2]
// console.log(maxNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]])); // [-34, -2, 7]

// function maxNums(array) {
// return array.map((item)=>Math.max(...item))
// }

//rigth
// console.log(maxNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]))
// console.log(maxNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]));

// 2.3 Create a function called 'findLetterIndex(text,letter)', that returns the first index and the last index of a character.
// console.log(findLetterIndex("hello", "l")); // [2,3]
// // console.log(findLetterIndex("happy", "h")); //[0, 0]

// function findLetterIndex(test,letter) {
// let first=test.indexOf(letter)
// let last=test.lastIndexOf(letter)
// return [first,last]
// }

//rigth (min code)
// console.log(findLetterIndex("hello", "l"));
// console.log(findLetterIndex("happy", "h"))

// 2.4 Create a function called checkNum that takes an array of numbers arr and a number n.
//  Return true if the sum of any two elements is equal to the given number. Otherwise, return false.
// console.log(checkNum([10, 12, 4, 7, 9, 11], 16));  //true
// console.log(checkNum([2, 8, 9, 12, 45, 78], 1)); //false
// console.log(checkNum([0, 9, 7, 23, 19, 18, 17, 66], 39)); //false



// function checkNum(arr, n){
//     return arr.some((item) => arr.includes(n-item))
//  }

//  //rigth
//  console.log(checkNum([10, 12,8,0,9, 4, 7, 9, 11], 16));
//  console.log(checkNum([2, 8, 9, 12, 45, 78], 1))
//  console.log(checkNum([0, 9, 7, 23, 19, 18, 17, 66], 39))
 

