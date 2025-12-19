//Write the programe to find the reverse of the number useing while loop and do while loop?
//ANS:-
//while loop reverse
// let n = 5;
// while (n >= 1) {
//     console.log(n);
//     n--;
// }
// //do while loop reverse
// let t = 6;
// do {
//     console.log(t);
//     t--;
// } while (t >= 1);

 //Reverse a number using while loop
 n= 125;
    rev = 0;
    while (n > 0) {
        rem = n % 10;
        rev = rev * 10 + rem;
        n = Math.floor(n / 10);
    }
    console.log(rev); // 521
//Reverse a number using do while loop
n=125;
rev=0;
do{
    let rem=n%10;
    rev=(rev*10)+rem;
    n=Math.floor(n/10);
}while(n>0);
console.log(rev);// 521