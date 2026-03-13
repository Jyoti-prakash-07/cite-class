const student= {
   name:"jyoti",
     age:24,
    isMember:true
};
student.age=25;
student["age"]=student["age"]+1;
student["age"]=27;
student["name"]="Jyoti Sharma";

console.log(student.name);
console.log(student.age);