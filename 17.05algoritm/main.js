// Task 1
// function fun1(arr) {
// return  arr.sort((a,b)=>a.length-b.length)
// }

// console.log(fun1(["may", "april", "september", "august"]));  // ['may', 'april', 'august', 'september']
// console.log(fun1(["a", "ccc", "dddd", "bb"]));  //  ['a', 'bb', 'ccc', 'dddd']

// Task 2
function fun2(str) {
  //   let arr = str.split(" ").sort((a, b) => +a - +b);
  //   return `${arr.at(-1) }, ${arr[0]}`
  let arr = str.split(" ");
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return `${max} ${min}`;
}
console.log(fun2("2 3 4 5 6")); // '6 2'
console.log(fun2("1 2 -6 4 7")); // '7 -6'

// // Task 3
// function fun3(tileHand) {
// return tileHand.reduce((a,b)=>a+b.score,0)
// }
// console.log(fun3([
//     { tile: "N", score: 1 },
//     { tile: "K", score: 5 },
//     { tile: "Z", score: 10 },
//     { tile: "X", score: 8 },
//     { tile: "D", score: 2 },
//     { tile: "A", score: 1 },
//     { tile: "E", score: 1 }
// ])); // 28

// console.log(fun3([
//     { tile: "B", score: 2 },
//     { tile: "V", score: 4 },
//     { tile: "F", score: 4 },
//     { tile: "U", score: 1 },
//     { tile: "D", score: 2 },
//     { tile: "O", score: 1 },
//     { tile: "U", score: 1 }
// ])); // 15

// Task 4
function fun4(...boxes) {
  return boxes
    .map((item) => item.reduce((a, b) => a * b))
    .reduce((a, b) => a + b);
}
console.log(fun4([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1])); //63
console.log(fun4([2, 2, 2], [2, 1, 1])); // 10

// Task 5
function fun5(people) {
  let value = Object.values(people);
  let max = Math.max(...value);
  return Object.keys(people)
    .filter((key) => people[key] == max)
    .toString();
}
console.log(
  fun5({
    Emma: 71,
    Jack: 45,
    Amy: 15,
    Ben: 29,
  })
); //Emma

console.log(
  fun5({
    Max: 9,
    Josh: 13,
    Sam: 48,
    Anne: 33,
  })
); // Sam
