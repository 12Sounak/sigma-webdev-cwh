console.log("hello I'm Conditional tutorial");

let age = 0;

// let grace = 2;
// age += grace;

// console.log(age);
// console.log(age+grace);
// console.log(age-grace);
// console.log(age*grace);
// console.log(age/grace);
// console.log(age**grace);     //This is 3^2
// console.log(age%grace);

// if(age==18){
//     console.log("You can drive");
// }
// else{
//     console.log("You cannot drive");
// }

// node js reple: read evaluate print loop , in terminal write node and u can use the jS complier as calculator
// the difference between == and ===
// "3" == 3, this is true as == compares only the value
// "3" === 3 , this is false as === compares the value as well as the type.


// if else -ladder
if(age==18){
    console.log("You can drive");
}
else if(age == 0)
{
    console.log("Are you kidding");
}
else{
    console.log("You cannot drive");
}

// javaScript ternary operator : apply if-else in one line
a = 6;
b = 8;
c = a>b ? (a-b):(b-a);
console.log(c);