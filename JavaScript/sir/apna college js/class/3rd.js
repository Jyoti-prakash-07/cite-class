//loops

//for loop

// for (let i = 0; i < 5; i++){
   
//  console.log("i=", i);
// }
// for (let j = 1; j <= 10; j++){
//     console.log("jyoti");
// }
// for (let sum = 1; sum <= 5; sum++) {
//   console.log("Total sum =", sum);
// }

//Calculating sum of 1 to 5 numbers


// let sum = 0;
// for(let i = 1; i <= 5; i++){
//   sum = sum + i;
// }
// console.log("Total sum =",sum);



// while loop

// let i=1;
// while(i<=5){
//     console.log("apna college");
//     i++;
// }


//do while loop
let i=6;
do{
    console.log("apna college");
    i++;
}while(i<=5);//one time execute for i=6 and condition false


//for of loop


// let str="hello";
// for (let i of str){
//     console.log(i);
// }

let name="jyoti";
let size=0;
for (let i of name){
  console.log(i);
size++;
}
console.log("size =",size);


// for in loop
let person={
    fname:"jyoti",
    lname:"kumari",
    age:22,
 isStudent:true,
   cgp:8.5

};

for (let i in person){
    // console.log("key=",i);//keys
    console.log(i,"=",person[i]);//values
}