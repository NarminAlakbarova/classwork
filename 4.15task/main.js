// let arr=[2,4,-3,-43,41,-3]
// // console.log(arr.filter((item)=>item>0));

// function findPositiveElem(array) {
//   return  arr.filter((elem)=>elem>0)
   
// }
// console.log(findPositiveElem(arr));

// //////////2
// function isRectangle(a,b,c) {
// if(c**2==a**2+b**2||b**2==a**2+c**2||a**2==b**2+c**2){
// return `yes`
// }
// else return `no`
// }

// console.log(isRectangle(3,4,5));
// console.log(isRectangle(3,6,5));
// console.log(isRectangle(4,5,3));

//////3

// function factorial(number) {
//     let fact=1
// for(i=1;i<=number;i++){
//    fact*=i
// }
// return fact
// }
// console.log(factorial(3));


//////////4
// const countries=[
//     "Finland",
//     "Denmar",
//     "swedan",
//     "Azerbaijan",
//     "Norway",
//     "iceland",
// ];
// function findlength(arry) {
   
//    let max= Math.max(...arry.map((el)=>el.length));
// return arry.find((item)=>item.length==max)

// }
// console.log(findlength(countries));

////5
// const webTechs=["html","CSS","js","react","Redux","Node","MongDB"]
// function findUpperCaseElem(array) {
// return  array.findIndex((str) => str.toUpperCase() === str);
// }
// console.log(findUpperCaseElem(webTechs));

///////////6
let arr2 = [
    {
      name: "test",
      key: 9,
    },
    {
      name: "task",
      key: 4,
    },
    {
      name: "tanqo",
      key: 3,
    },
    {
      name: "like",
      key: 2,
    },
    {
      name: "task",
      key: 5,
    },
    {
      name: "Trust",
      key: 8,
    },
    {
      name: "test",
      key: 12,
    },
    {
      name: "last",
      key: 6,
    },
    {
      name: "tanqo",
      key: 1,
    },
    {
      name: "elephant",
      key: 13,
    },
    {
      name: "Love",
      key: 11,
    },
    {
      name: "small",
      key: 7,
    },
    {
      name: "Little",
      key: 10,
    },
  ];
//    function findIndex(obj) {

//      return obj.filter((item)=>item.name[0]=="t" && item.name.at(-1)=="t")
//    }
// console.log(findIndex(arr2));
///////////
//    function findIndex(obj) {

//      return obj.filter((item)=>(item.name[0]=="L" && item.key>10))
//    }
// console.log(findIndex(arr2));

/////////
// function findIndex(obj) {

//     let max= Math.max(...obj.map((el)=>el.name.length));
//     return obj.find((item)=>item.name.length==max).key
//   }
// console.log(findIndex(arr2));

////////
// function findIndex(obj) {

//     let max= Math.max(...obj.map((el)=>el.key));
//     return obj.find((item)=>item.key==max).name
//   }
// console.log(findIndex(arr2));
/////////
// function findIndex(obj) {


//     return obj.filter((item)=>item.name)
//   }
// console.log(findIndex(arr2));
// program to check the number of occurrence of a character

function countString(str, letter) {
    let count = 0;

    // looping through the items
    for (let i = 0; i < str.length; i++) {

        // check if the character is at that position
        if (str.charAt(i) == letter) {
            count += 1;
        }
    }
    return count;
}

// take input from the user
const string = "narmin";
const letterToCheck = "a";

//passing parameters and calling the function
const result = countString(string, letterToCheck);

// displaying the result
console.log(result);


