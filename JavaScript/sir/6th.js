// // let variable_name= "string"
// let age =21
// let str = `My age is ${age}`
// console.log(str);



// let a = "hello\n  \tworld"
//  console.log(a);

let a = 'hello'
console.log("Length is",a.length);
console.log("Uppercase",a.toUpperCase());
b=a.toUpperCase()
console.log(b);
console.log("Lowercase",a.toLowerCase());
console.log(a.slice(1,4));


// a="    hello world    "
a="hello world \n"
console.log(a.slice(6));
console.log(a.replace("world","everyone"));
console.log( a.slice(0,3)+a.slice(3).replace("l","i"));//for replecement of second l
b= ` \tiamjyoti`
console.log(a.concat(b));


a="    hello world    "
console.log(a.trim());
console.log(a.trim().slice(0,3));
a="word"
console.log(a[2]);
console.log(a.split(''));
console.log(a.split('').reverse());//reverse is not a string it is an array
console.log(a.split('').reverse().join(''));//join is not a string it is an array
b=a.split('').reverse().join('')
console.log(b);