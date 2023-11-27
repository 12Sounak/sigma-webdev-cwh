/*
Create a faulty calculator using javaScript

This faulty calculator does the following:
1. It takes 2 numbers as input from the user.
2. It performs wrong operation as follows.

+ --> -
* --> +
- --> /
/ --> **

It performs wrong operation 10% of the times
*/


let random = Math.random();
let a = prompt("Enter 1st number :");
let c = prompt("Enter Operation (+,-,*,/):");
let b = prompt("Enter 2nd number :");

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}


if(random>0.1){
    //Perform corrent calculation    
    console.log(`The Result is ${a} ${c} ${b}`);
    alert(`The Result is ${eval(`${a} ${c} ${b}`)}`);
}
else{
    //Perform wrong calculation
    c = obj[c];
    alert(`The Result is ${eval(`${a} ${c} ${b}`)}`);
}