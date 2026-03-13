// print all even numbers from 0 to 100

// for (let i=0;i<=100;i++){
//    if (i%2===0){
// console.log(i);
// }
// };
// //odd number
// for (let i=0;i<=100;i++){
//    if (i%2 !==0){
// console.log(i);
// }
// };

// Create a game where you start with any random game number .
//Ask the user to keep guessing the game number until the user enters the correct number.

let gameNum = 25;
let userNum=prompt("Guess the game number :");
while (userNum != gameNum){
userNum=prompt("you entered wrong number. Guess again :");
}
console.log ("Congratualitions,you enter the right number ");
