//Write a programe to check whether the number is perfect number or not using while loop and do while loop?

//ANS:-

// while loop perfect number
let n = 6; 
let i = 1;
let sum = 0;
while (i < n) { //loop to find divisors
    if (n % i === 0) { //check if i is a divisor 
        sum = sum + i;  //add divisor to sum 
    }
    i++;//increment i
}

if (sum === n) { //check if sum of divisors equals the number
    console.log(n + " is a perfect number");//print result
} else {
    console.log(n + " is not a perfect number");//print result
}



// do while loop 
n = 20;
i = 1;
sum = 0;
do {
    if (n % i === 0) { 
        sum = sum + i;
    }
    i++;
} while (i < n);
if (sum === n) {
    console.log(n + " is a perfect number");
} else {
    console.log(n + " is not a perfect number");
}