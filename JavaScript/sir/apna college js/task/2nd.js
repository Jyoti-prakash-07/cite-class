/*Get user input a number using prompt("Enter a number:").check if 
the number is multiple of 5 or not. */

//Ans:-
//    let number = prompt("Enter your number");

// if (number%5===0){
//      console.log(number,"number is multiple of 5")
// } else{
//     console.log(number,"number is not multiple of 5")
// }


/*Write a code which can give grades to students according to their marks:
  .90-100 => A
    .70-89 => B
    .60-69 => C
    .50-59 => D
    .0-49 => F */
//Ans:-
let mark = prompt("Enter your marks");
if(mark>=90 && mark<=100){
console.log( "Grades:-A");
}else if  (mark>=70 && mark<=89 ) {
console.log( "Grades:-B");
}else if  (mark>=60 && mark<=69 ) {
console.log( "Grades:-C");
}else if  (mark>=50 && mark<=59 ) {
console.log( "Grades:-D");
}else {
console.log( "Grades:F");
}