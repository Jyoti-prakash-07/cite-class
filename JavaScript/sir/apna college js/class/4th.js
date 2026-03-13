//Array Destructuring
let marks = [90, 80, 70, 60, 50];
console.log(marks); 
console.log(marks.length);
console.log(marks[2]);


let heroes = ["Superman", "Batman", "Wonder", "Flash", "Aquaman"];
//for loop
// for (let idx=0; idx < heroes.length; idx++){
// console.log(heroes[idx]);

// }

//for of loop

// for (let hero of heroes){
//     console.log(hero);
// }


let cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
for (let city of cities){
    console.log(city.toUpperCase());
}