////////////////////reverse string
// let string="hello"
// function reverse(str) {
//     return str.split("").reverse().join("")
// }
// console.log(reverse(string));

///////////// method 2
// function reverseStr(str) {
//  let result=""
//  for(let i=str.at(-1);i>=0;i--){
//     result=result+str[i]
//  }
//  return result
// }
// console.log(reverseStr(string));


/////////////////////////////polidrom

// function isPolidrom(str) {
// if(str===str.split("").reverse().join("")){
// return `yes ${str}is polidrom`
// }
// else{
//  return   `no ${str} is not polidrom`
// }
// }
// console.log(isPolidrom("hello"));

//////////////remove dublicated
// let array=[1,2,2,2,4,3,3,2,4,7,5,7,6]
// function removeDumlicates(array1){
// let array2=[]
//  array1.forEach((item)=>!array2.includes(item)&&array2.push(item))
// return array2
// }
// console.log(removeDumlicates(array));
// function uniqueElem(array) {
//     return[...new Set(array)]
// }
// console.log(uniqueElem(array));

//////////////generate otp
// function generateOtp(params) {
//     let result=''
// for(i=0;i<4;i++){
//     result+=Math.floor(Math.random()*10)
// }
// return result
// }
// console.log(generateOtp());

//////Method 2
// function generateOtp(){
//     let digits="0123456789"
//     let otp=""
//     for(i=0;i<4;i++){
//         otp+=digits[Math.floor(Math.random()*10)]
//     }
//     return otp
// }
// console.log(generateOtp());

/////////////////find all truth values



