// let n=8;
// let t1=0, t2=1, t3=0;
// for(let i=0; i<n; i++){
//      t3 = t1 + t2;
// console.log(t3);
//         t1 = t2;
//         t2 = t3;
// }

//phybonacci series
let n=8;
let t1=0, t2=1, t3=0;
for(let i=0; i<(n-2); i++){
     t3 = t1 + t2;
console.log(t3);
        t1 = t2;
        t2 = t3;
}