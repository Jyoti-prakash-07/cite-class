//Write a programe to check whether a number is palindrome or not using while loop and do while loop?
//ANS:-
//while loop palindrome
let n=121;
let rev=0;
org=n;
while(n>0){
    let rem=n%10;
    rev=(rev*10)+rem;
    n=Math.floor(n/10);
}
if(org===rev){
    console.log("palindrome");
}else{
    console.log("not palindrome");
}
console.log(org);
//do while loop palindrome

let j = 123;
 ver = 0;
 ogr = j;

do {
    let mer = j % 10;
    ver = (ver * 10) + mer;
    j = Math.floor(j / 10);
} while (j > 0);

if (ogr === ver) {
    console.log("Palindrome",ver);
} else {
    console.log("Not Palindrome",ver);
}









