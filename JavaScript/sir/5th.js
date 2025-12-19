
function calculateGrade() {

let math =parselent(document.getElementById("math").value);


let eng =persent(document.getElementById("eng").value);

let odia =persent(document.getElementById("odia").value);

let snc =persent(document.getElementById("snc").value);
let geo =persent(document.getElementById("geo").value);
let total = math + eng + odia + snc + geo ;
let per = total / 5 ;
console.log("Total Mark",total,"per",per,"%");

if (per >= 90 && per <= 100) {
    console.log("A+");
} else if (per >= 80 && per < 90) {
    console.log("A");
} else if (per >= 70 && per < 80) {
    console.log("B+");
} else if (per >= 60 && per < 70) {
    console.log("B");
} else if (per >= 50 && per < 60) {
    console.log("C+");
} else if (per >= 40 && per < 50) {
    console.log("C");
} else if (per >= 33 && per < 40) {
    console.log("D");
}else{
    console.log("Fail");
    } 
}