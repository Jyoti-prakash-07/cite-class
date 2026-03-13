/*prompt the user to enter their full name.Generate a 
username for them based on the input startusername with @, followed by their fullname and ending with the 
fullname length.
For example, if the user enters "John Doe", the generated username should be "@John Doe7".*/
let fullname = prompt("Enter your full name");
let username = "@" + fullname + fullname.length;
console.log(username);
