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
    rev = 0; //variable to store reverse number
    while (n > 0) {
        rem = n % 10;//getting remainder // last digit of the number // 125%10=5 // 12%10=2 // 1%10=1
        rev = rev * 10 + rem;//forming the reverse number // shifting digits to left and adding remainder // 0*10+5=5 // 5*10+2=52 // 52*10+1=521
        n = Math.floor(n/10);//removing last digit from the number // updating n by removing last digit // 125/10=12.5 // 12/10=1.2 // 1/10=0.1
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