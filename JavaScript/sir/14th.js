// filter method
// let arr=[5,10,15,20,25,30,35,40,45,50];
// let res=arr.filter((value)=>{
//     return value>20
// })
// console.log('result',res);


//reduce method
const numbers=[175,50,25];
let res1=numbers.reduce((total,num)=>{
    return total-num;
},);
console.log('res=',res1);

//array from method
  const str="hello world";
    let charArray=Array.from(str);
console.log('charArray=',charArray);
