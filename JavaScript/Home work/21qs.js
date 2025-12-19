//Write a programe to print thed phybonacci series of to n turn using while loop and do while loop?
//ANS:-
//while loop phybonacci
let n=8;
let t1=0, t2=1, t3=0;
let i=0;
while( i<(n-2)){
        t3 = t1 + t2;
 console.log(t3);
        t1 = t2;
        t2 = t3;
        i++;
}
//do while loop phybonacci
n=9;
t1=0, t2=1, t3=0;
i=0;
do{
        t3 = t1 + t2;
    console.log(t3);
        t1 = t2;
        t2 = t3;
        i++;
}while( i<(n-2));
   