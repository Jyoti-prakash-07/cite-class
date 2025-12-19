// //array
// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr[0]);
// //accessing the value in array

// //finding length of array
// console.log('Length of array:-', arr.length);
// //changing value in array
// arr[2] = 'z';
// console.log(arr);
// console.log('type of arr:-', typeof (arr));

//arry methods
//two string methods
let arr1 = ['x', 7, 'y', 3, 'z'];
// console.log(arr1.toString());
//join method
// console.log(arr1.join('/'));
//pop method
// arr1.pop();
// console.log(arr1);
//push method
// arr1.push('a');
// console.log(arr1);
// //shift method
// arr1.shift();
// console.log(arr1);
// //unshift method
// arr1.unshift('b');
// console.log(arr1);
// //delete method
// delete arr1[2];
// console.log(arr1);
//concat method
let arr2 = ['p', 'q', 'r'];
let arr3 = arr1.concat(arr2);
console.log(arr3);
//sort method
arr1.sort();
console.log(arr1);
//splice method
arr1.splice(2, 0, 'new' ,8);
console.log(arr1);
// slice method
let arr4 = arr1.slice(1,4);
console.log(arr4);
//reverse method
arr1.reverse();
console.log(arr1);