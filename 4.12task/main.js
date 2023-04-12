
//1
let myText="An array is a collection of items of same data type stored at contiguous memory location"
let x=0;
for(i=0;i<myText.length;i++){
    if(myText[i]=="a"||myText=="A"){
        x++
    }
}
console.log("There are x number of 'a',",x)

//2
const arr1=[1,2,4,5,7,9,13,22]
let sum=0
for(i=0;i<arr1.length;i++){
  sum+=arr1[i]
}
console.log(sum);

//3
const arr2=[false,0,2,true,23,undefined,'are u stack','come on']
const arry2=[]
for(i=0;i<arr2.length;i++){
    if(i%2==1){
        arry2.push(arr2[i])
    }
}
console.log(arry2);
//4
let newText=[];
let text1="How is it going?"
for(i=0;i<text1.length;i++){
    // newText=text1.split("i").join("")
    if(text1[i]!="i"){
        newText+=text1[i]
    }
}
console.log(newText);

//5
const numbersArr=[2,false,'5','true',9,0,'1']
let sum1=0;
for(i=0;i<numbersArr.length;i++){
if(typeof numbersArr[i]==="number"){
    sum1+=numbersArr[i]
}
}
console.log(sum1);
//6
const mixType=[1,'3',4,false,null,22,true]
const mixType1=[]
for(i=0;i<mixType.length;i++){
  mixType1[i]=String(mixType[i])
}
console.log(mixType1);
//7
const myObj={
    color:'red',
    width:320,
    height:200,
    padding:4,
    fontSize:'22px'

}

for(let key in myObj){
    if( typeof myObj[key]=="number"){
myObj[key]*=2
    }
}
console.log(myObj);
