//////////////1
const arr1=['a','b','c','d','e']
//1
// arr1.splice(1,1)
// console.log(arr1);
//2
// arr1.splice(2,2)
// console.log(arr1);
//3
// arr1.splice(arr1.length-1)
// console.log(arr1);
//4
// arr1.splice(arr1.length-3)
// console.log(arr1);
//5
// arr1.splice(3,0,3,4)
// console.log(arr1);
///6
// arr1.splice(0,2,"A","B")
// console.log(arr1);

/////////////////////2
///1
const arr2=['user1','user2','user3',11,3,5]
//  newArr=arr2.slice(0)
// console.log(newArr);
//2
// newArr=arr2.slice(1,5)
// console.log(newArr);
// //3
// newArr=arr2.slice(2)
// console.log(newArr);

//////////////////3
// const arr3=[1,2,3]
// const arr33=[4,5,6]
//1
// console.log(arr3.concat(arr33));
//2
// console.log(arr3.concat(['a','b']));

////////////////4
// const arr4=['name','surname',10,'age','city','uni',80,20]
//1
// arr4.forEach((element)=>{console.log(element);})
//2
// arr4.forEach((element)=>{typeof element=="number"&& console.log(element*2);})
/////////////5
const arr5=[4,5,6,'2',6,true,undefined,'55']
//1
// arr5.map((element)=>{console.log(element);})
//2
// arr5.map((element)=>{typeof element==="number"?console.log(element*5):console.log(element);;})
//3
// let newArry=arr5.map((element)=>{ return String(element)})
// console.log(newArry);
//4
//  let newArry=arr5.map((element)=>{ return Boolean(element)})
// console.log(newArry);

//5
// let newArry=arr5.map((element)=>{ return Number(element)})
// console.log(newArry);
// //6
// newArry=arr5.map((element)=>{
  
// return Number(element)||console.log(Math.max(element));;
//  })


/////////////////6
///1
// const mixArray=['1',2,4,'a',false,'9',12,'42',undefined,3,true,null]
// let newArry=mixArray.filter((elem)=>{ return typeof elem=="number"})
// console.log(newArry);
///2
// const mixArray=['1',2,4,'a',false,'9',12,'42',undefined,3,true,null]
// let newArry=mixArray.filter((elem)=>{ return typeof elem=="string"})
// console.log(newArry);
//3
// const mixArray=['1',2,4,'a',false,'9',12,'42',undefined,3,true,null]
// let newArry=mixArray.filter((elem)=>{ return typeof elem=="boolean"})
// console.log(newArry);
//4
// const mixArray=['1',2,4,'a',false,'9',12,'42',undefined,3,true,null]
// let newArry=mixArray.filter((elem)=>!elem)
// console.log(newArry);
// console.log(newArry);

////////7
// const arr7=[44,3,6,'2',6,true,undefined,'55',null]
// let newArr1=arr7.filter((item)=>Number(item))
// let newArr2=Math.max(...newArr1.map((item)=>Number(item)))
// console.log(newArr2);



