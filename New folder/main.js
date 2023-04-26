function myfunc(str) {
  let count = 0;
  let letter = [];
let obj={}
  str
    .toLowerCase()
    .split("")
    .map((item) => {
      count = str.toLowerCase().split(item).length - 1;
      letter.push([item, count]);
    });
  return Object.fromEntries(letter);

}
console.log(myfunc("hello world"));
console.log(myfunc("Nermin"));
