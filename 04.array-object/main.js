//1
const arry=[0,1,2,3,4,5,6,7,8,9,10]
console.log(arry);

//2
const arry1=[5, true, "Narmin"]
console.log(arry1);
//3
const arry2=[0,1,2,3,4,5]
const arry3=arry2
console.log(arry3);
//4
const arry4=[0,1,2,3,4,5,6,7]
arry4.push(8,9)
console.log(arry4);
//5
const arry5=[]
arry5.push(5,6,7)
arry5.shift()
arry5.unshift(2)
console.log(arry5);
//6
// const arry6=["Narmin","Alakbarova","Quba"]
// arry6[arry6.length-1]="Qusar"
// console.log(arry6);
const arry6=["Narmin","Alakbarova","Quba"]
arry6[2]="Qusar"
console.log(arry6);
//7

for (const element of arry) {
  console.log(element);
}

/////////Object tasks///////////

//8
const obj={
    id:1,
    firstName:"Narmin",
lastName:"Alakbarova",
location:"GDU 2"

}
console.log(obj);

//9
const obj2=obj
console.log(obj2);
//10
obj.id=3
console.log(obj);
//11
for(const value in obj){
  console.log(obj[value]);
}
//12
for(const keys in obj){
    console.log(keys);
}
//13
delete obj.location
console.log(obj);
//14
const newObj=Object.assign(obj)
console.log(newObj);
//15
const user1={
    myName:"Narmin",
    surname:"Alakbarova",
    location:{
        street:"Tagi-Arani",
        city:"Gence"

    }
}
const user2=user1
const users=[user1,user2]
user1.location.city="baku"
console.log(user2);
console.log(users);
