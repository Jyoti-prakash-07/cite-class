/*Write a programe to find gretest between 3 numbers ?  */
//ANS:-
a = 10;
b = -6;
c = 12;
if (a > b && a > c) {
    console.log("Greatest is a:", a);
}
if (b > a && b > c) {
    console.log("Greatest is b:", b);
}
if (c > b && c > a) {
    console.log("Greatest is c:", c);
}
console.log("Greatest is:", (a > b) ? (a > c ? a : c) : (b > c ? b : c));

