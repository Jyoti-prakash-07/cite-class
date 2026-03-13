/*For a given array of with marks of students => [85,97,44,37,76,60] 
 find the avg marks of the entier class

*/

let marks =[85,97,44,37,76,60];
 
let sum =0;
for (let val of marks) {
   sum += val;

}


// for (let i = 0; i < marks.length; i++) {
//   sum += marks[i];
// }

console.log(sum);

console.log (sum);
let avg=sum/marks.length;
console.log(`avg marks of the class = ${avg}`);
console.log("avg marks of the class =" ,);

