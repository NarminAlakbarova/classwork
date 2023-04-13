function calculateN(number){
 console.log(Math.trunc(number/100));
console.log(Math.trunc((number%100)/10));
console.log(Math.trunc((number%10)));
}
calculateN(325)