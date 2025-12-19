// Reverse a number using while loop
let n = 125;
let rev = 0;//reverse number always start with 0
let rem;//remainder always start with undefined//it is always use n value

while (n > 0) {
    rem = n % 10;// 5 2 1         
    rev = rev * 10 + rem;// 0*10+5=5  5*10+2=52  52*10+1=521 
    n = Math.floor(n / 10); 
}
console.log(rev); // 521
// Reverse a number using do while loop
// let n=125
// let rev=0;
// while(n>0){
//     let rem=n%10;
//     rev=(rev*10)+rem;
//     n=Math.floor(n/10);
// }
// console.log(rev);// 521
// do while loop
do{
    let rem=n%10;
    rev=(rev*10)+rem;
    n=Math.floor(n/10);
}while(n>0);
console.log(rev);// 521