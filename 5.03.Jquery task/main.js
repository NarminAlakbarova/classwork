///////////////test1
let colors = ["red", "green", "blue", "yellow", "orange", "brown"];
$("#change").click(function () {
  let color = colors[Math.floor(Math.random() * colors.length)];
  $(".title").css("color", color);
});
////task2
$("#hide").click(function () {
  $(".title").hide();
});
$("#show").click(function () {
  $(".title").show();
});
////task3
$.each(colors, function (index, value) {
  console.log(value);
});
///////task4
const numbers = [4, 2, false, null, "false", NaN, undefined, 8, true, "9"];
let sum = 0;
$.map(numbers, function (value, index) {
  if (value) {
    sum += index;
  }
});
console.log(sum);




