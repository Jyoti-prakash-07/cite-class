//Write a programe to find the factorial while loop and do while loop?
//ANS:-
//while loop fctorial
let n=6;
let fact=1;//factorial variable alwasys start with 1
let i=1; //counter variable
while(i<=n){
    fact=fact*i;
    i++;
}
console.log(fact);// 720




//do while loop factorial
let m=5;
let f=1;//factorial variable always start with 1
let j=1; //counter variable
do{
    f=f*j;
    j++;
}while(j<=m);
console.log(fact);  // 120