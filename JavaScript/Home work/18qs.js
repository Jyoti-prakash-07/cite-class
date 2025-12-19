//Write a programe to check whether the number is prime or not using while loop and do while loop?
//ANS:-
//while loop prime
num=17;
count=0;
let i = 1;
while( i <= num){
if (num % i === 0){
    count++;
    if(count>2){ // for evoide unnecessary iteration
        break;
    }
}
}
if(count>2){
    console.log("not prime");
}else{
    console.log("prime");
}