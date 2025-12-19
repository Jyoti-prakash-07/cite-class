//Write a programe whether the number is strong number or not using while loop and do while loop?
//ANS:-
//while loop strong number
let n=145;
let tmp=n;
let sum=0;

while(n>0){ // loop until n becomes 0
    rem=n%10;// to get last digit
   let fact=1;// to store factorial
    for(let i=1;i<=rem;i++){// factorial calculation
        fact=fact*i;// factorial calculation
        
}
sum=sum+fact;// adding factorial to sum
n=Math.floor(n/10);// removing last digit

}
if(sum===tmp){// comparing sum with original number
    console.log("strong number");
}else{
    console.log("not strong number");
}