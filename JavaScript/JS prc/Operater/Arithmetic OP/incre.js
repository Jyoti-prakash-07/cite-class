a=4;
b=5;
c=6;
d=7;
e=8;
//post
console.log(a=b++);//5// a=5,b=6
console.log(b=c++);//6//b=6,c=7
console.log(c=d++);//7//c=7,d=8
console.log(d=e++);//8//d=8,e=9
console.log(e=a++);//5//e=5,a=6
//a=6,b=6,c=7,d=8,e=5

//pre
console.log(a=++b);//6//a=6,b=6
console.log(b=++c);//7//b=7,c=7
console.log(c=++d);//8//c=8,d=8
console.log(d=++e);//9//d=9,e=9
console.log(e=++a);//7//e=7,a=7
//a=7,b=7,c=8,d=9,e=7