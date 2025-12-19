
// //loops
// // for loop

// let a=100;
// for(let i=-1;i<=a;i++){

//     // console.log("hello");
//     console.log(i);
// }


//fectorial

// let b=6;
// let fact=1;
// for(let a=1;a<=b;a++){
//     fact=fact*a;
// }
// console.log(fact);


//for in loop
let std={
name:"siri",
age:22,
class:7,
mark:450
}
// for(i in std)
//     console.log(i);

// for(i in std)
//     console.log(i,std[i]);

// for(i in std){
//     console.log(i,std.age[i]);
// }
// for(i in std){
//     if(i=="name"){
//         if(std[i]=="sir"){
//             console.log("name is correct");
//         }
//         else{
//             console.log("name is incorrect");
//         }
//     }
// }





// const std = {
//     Alice: { age: 20, class: 5, mark: 98 },
//     Bob: { age: 19, class: 5, mark: 85 },
//     Charlie: { age: 21, class: 6, mark: 90 },
//     David: { age: 10, class: 5, mark: 76 },
//     Eva: { age: 22, class: 7, mark: 88 },
//     Frank: { age: 9, class: 6, mark: 92 },
//     Grace: { age: 20, class: 5, mark: 81 },
//     Helen: { age: 21, class: 6, mark: 95 },
//     Ian: { age: 22, class: 7, mark: 73 },
//     Jack: { age: 20, class: 5, mark: 89 }
// };

// for (i in std) {
//     for (j in std[i]) {
//         // console.log(i, j, std[i], std[i][j]);
//             if (j === "age") {
//                 if (std[i][j] >= 18) {
//                     console.log(i, 'is Eligible for vote');
//                 } else {
//                     console.log(i, 'is Not Eligible for vote');
//                 }
//             }
//     }
// }


// for (i in std) {
//     if (std[i].age >=18) {
//         console.log(i, 'is Eligible for vote');
//     } else {
//         console.log(i, 'is Not Eligible for vote');
//     }
// }