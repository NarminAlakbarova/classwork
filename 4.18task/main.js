// 1.Create a function called 'secretName()' that takes in an array of names and returns the first letter of name.//////////////

// let names1 = ["Adam", "Sarah", "Malcolm"] //"ASM"
// let names2 = ["Harry", "Newt", "Luna", "Cho"] //"CHLN"
// let names3 = ["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"] //"CJMPRR"
// function secretName(array) {
//     return array.map((item)=>item.charAt(0)).join("")
// }
// console.log(secretName(names1));
// console.log(secretName(names2));
// console.log(secretName(names3));

// 2.Manipulate array///////////////////////////////////////////////////////

// 2.1.Show users who is studying at 'UNEC' and surname starts 'r'.
const users = [
    { name: 'Anar', surname: 'Hesenli', age: '22', uni: 'ADA', gender: 'male' },
    { name: 'Nezrin', surname: 'Reshidova', age: '23', uni: 'UNEC', gender: 'female' },
    { name: 'Hikmet', surname: 'Hesenova', age: '22', uni: 'UNEC', gender: 'male' },
    { name: 'Nicat', surname: 'Sadiqov', age: '25', uni: 'UNEC', gender: 'male' },
    { name: 'Murad', surname: 'Salmanli', age: '23', uni: 'ADNSU', gender: 'male' },
    { name: 'Aynure', surname: 'Hesenzade', age: '23', uni: 'BMU', gender: 'female' },
]

// function findStuden(array) {
  
//     return array.filter((item)=>item.uni=="UNEC"&&item.surname[0]==="R")
    
// }
// console.log(findStuden(users));

// 2.2.Show users whose age is eqaul to 22 and name start 'a'.
// function findUsers(array) {
//     return array.filter((item)=>item.age==="22"&& item.name[0].toLocaleLowerCase()==="a")
// }
// console.log(findUsers(users));
// 2.3.Return new array, if user is male add in front of name 'Mr', or Ms. (e.g. name:'Mr Anar', 'Ms Aynure').
// function findUser(array){
//     let newArry=[]
//     return array
//     .map((item)=>item.gender==="male"?"Mr "+item.name:"Ms "+item.name)
//     }
// console.log(findUser(users));
// // 2.4.Sort users by age (ascending).
// function sortUsers(array) {
//     return array.sort((a,b)=>a.age.length-b.age.length)
// }
// console.log(sortUsers(users));

// 3.Shuffle array////////////////////////////////////////////////////////////////////
// const numbers = [1, 2, 3, 4, 5, 6, 7]
// let suffleArr=numbers.sort(()=>Math.random()-0.5)
// console.log(suffleArr);
// const letters = ['a', 'b', 'c', 'd']
// let suffleLetters=letters.sort(()=>Math.random()-0.5)
// console.log(suffleLetters);
// 4.Divide 2 the price of arr4.
const arr4 = [
    {
        product: 'Lenova',
        price: 1900,
    },
    {
        product: 'HP',
        price: 1300,
    },
    {
        product: 'Acer',
        price: 1600,
    },
]
arr4.map((item)=>item.price=item.price/2)
    console.log(arr4);


    // 5.Create a function called 'reverseNum()' which is to bind number with its reverse.

let num1 = 246 //246642
// let num2 = 102 //102201
// let num3 = 152 //152251
// let nesNumber=num1.toString().split("").reverse().join("")
// console.log(`${num1}${nesNumber}`);
// function reverseNum(number) {
//     let Num=number.toString().split("").reverse().join("")
//     return Num
// }
// console.log(reverseNum(`${num1} ${Num} `));