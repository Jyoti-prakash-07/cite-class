/*Write a programe to enter a person age to check wheather he/she able for vote ?*/
//ANS:-
let person ={
hari:18,
sita:15,
gita:22
}

if(person.hari>=18){
    console.log(" hari able for vote");
}
else{
    console.log("hari not able for vote");
}
if(person.sita>=18){
    console.log(" sita able for vote");
}
else{
    console.log(" sita not able for vote");
}
if(person.gita>=18){
    console.log(" gita able for vote");
}
else{
    console.log(" gita not able for vote");
}


console.log("hari",((person.hari>=18) ? " able for vote" : " not able for vote"));
console.log("sita"+((person.sita>=18) ? " able for vote" : " not able for vote"));
