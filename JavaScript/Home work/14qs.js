// calculate percentage of a student//
let student = {
    math:95,
    eng:85,
    odia:75,
    snc:65,
    geo:55
};

 total =student.math + student.eng + student.odia + student.snc +student.geo ;
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
} else if (per >= 30 && per < 40) {
    console.log("D");
}else{
    console.log("Fail");
    } 
