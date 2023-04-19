// 1.Filter out Strings from an Array///////////////////////////////////////////////////
// Create a function called 'filterArray(arr)' that takes an array of non-negative integers and strings and return
//  a new array without the strings.

// filterArray([1, 'c', 2, "a", "b"]) // [1, 2]
// filterArray(['4', 1, "a", "b", 0, 15])  //[1, 0, 15]
// function filterArray(arr) {
//   return   arr.filter((item)=>item===
//   Number(item))
// }
// console.log(filterArray([1, 'c', 2, "a", "b"]));
// console.log(filterArray(['4', 1, "a", "b", 0, 15]));
//rigth
//there is another way

// 2.Summing a Slice////////////////////////////////////////////////////////////////////
// Create a function called 'sliceSum(arr, n)' that has an array and an integer n, return the sum of the first n numbers in the array.

// sliceSum([9, 8, 7, 6], 3)  //24
// sliceSum([1, 3, 2], 2) //4
// sliceSum([3, 6, 2], 0) //0

// function slicesum(arr,n) {
//  return   arr.slice(0,n).reduce((acc,curr)=>acc+curr,0)
// }
// console.log(slicesum([9, 8, 7, 6], 3));
// console.log(slicesum([1, 3, 2], 2));
// console.log(slicesum([3, 6, 2], 0));

//rigth

// 3.Spelling it Out////////////////////////////////////////////////////////////////////
// Create a function called 'spelling(str)' which takes in a word and spells it out, by consecutively adding letters until the full word is completed.

// spelling("bee") // ["b", "be", "bee"]
// spelling("happy") //["h", "ha", "hap", "happ", "happy"]

// function spelling(str) {
//     let newArr=[]
//     for (let i = 1; i <= str.length; i++) {
//          newArr.push (str.slice(0,i))
//       }
// return newArr
// }

// function spelling(array) {
//   return  array.split("").map((item,i)=>array.slice(0,i+1))
// }
// console.log(spelling("bee"));
// console.log( spelling("happy"));

//rigth

// 4.Hashes and Pluses//////////////////////////////////////////////////////////////////
// Create a function caled "hashPlusCount(str)" that returns the number of hashes and pluses in a string.
// Return [0, 0] for an empty string.
// Return in the order of [hashes, pluses].
// hashPlusCount("###+") // [3, 1]
// hashPlusCount("#+++#+#++#") // [4, 6]
// hashPlusCount("") // [0, 0]


// function hashPlusCount(str) {
// let result=[0,0]
//  str.split("").map((item)=>{
// item==="#"?result[0]++:result[1]++
// })
// return result
// }
// console.log(hashPlusCount("###+"));
// console.log(hashPlusCount("#+++#+#++#") );
// console.log(hashPlusCount(""));
//i am not sure 
//min code

////////// 5.Reverse the Case////////////////////////////////////////////////////////////////////
// Given a string, create a function called "reverseCase(str)" that to reverse the case.
//  All lower-cased letters should be upper-cased, and vice versa.

// reverseCase("Happy Birthday") //"hAPPY bIRTHDAY"
// reverseCase("MANY THANKS") //"many thanks"

// function reverseCase(str) {
//  return str.split("").map((item)=>item===item.toLowerCase()?item.toUpperCase():item.toLowerCase()
// ).join("")
// }
// console.log(reverseCase("Happy Birthday"));
// console.log(reverseCase("MANY THANKS") );

//rigth