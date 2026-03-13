// //String 
// // let str = "Apna college";
// // console.log(str[0]); //A position access

// // //let str2= 'jyoti';


// // Template literals (Template strings)
// let SpecialString  = `My name is Jyoti.`;
// console.log(SpecialString);


// let obj = {
//      item : 'pen',
//         price : 20
// };
// console.log('the cost  of' , obj.item ,"is",obj.price);
// console.log(`the cost of ${obj.item} is ${obj.price}`);//number is automatically converted to string


// let a= `hello ${2+3}`;
// console.log(a); // value of expression is calculated and inserted in string



// // /new line in string
// console .log('hello\n world'); //using \n for new line
// console .log('hello\t world');

// let str ="Apna\tCollege" ;
// console.log(str.length); // 12 // \t is counted as single character




// // string methods

// // toUpperCase() method
// let l = "hello!jyoti";
//  l =l.toUpperCase()
// console.log(l);

// // toLowerCase() method
// let o="      This is a flower.    ";
// console .log(o.trim());//for reducing spaces in starting and ending



// // slice() method
// let m="0123456";
// console.log(m.slice(2,5)); //234  //slicing from index 2 to 4 (5-1)
// console.log(m.slice(2,7)); //23456
// //
// let n="hello jyoti ";
// console.log(n.slice(6)); //jyoti  //slicing from index 6 to end
// console.log(n.slice(1,3)); //el  //slicing from index 1 to 2 (3-1)

// //str1.concat(str2) method

let str1="hello ";
let str2="jyoti";
let res= str1.concat(str2);
console.log(res); //hello jyoti

let res2= "hi world"+str1+str2;
console.log(res2); //hi worldhello jyoti


//str.replace() method


let text="hello ";
console.log(text.replace("h","H")); //Hello  //only first occurrence is replaced
console.log(text.replaceAll("l","L")); //heLLo  //all occurrences are replaced


//str.charAt() method


let str="I am jyoti";
console.log(str.charAt(5)); //j  //character at index 5


