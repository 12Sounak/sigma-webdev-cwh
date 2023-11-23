function nice(name){
    console.log("Hey " + name + " You are nice ");
    console.log("Hey " + name + " you are good!");
    console.log("Hey " + name + " your tshirt is nice!");
    console.log("Hey " + name + " your course is good too!");
}


nice("Rohan");
nice("shivan");
// console.log("Hey Harry you are nice!");
// console.log("Hey Harry you are good!");
// console.log("Hey Harry your tshirt is nice!");
// console.log("Hey Harry your course is good too!");

function sum(a,b){
    // console.log(a+b);
    return a + b;
}


result1 = sum(3,4);
result2 = sum(5,7);
result3 = sum(100,9);
console.log("The sum is :",result1);
console.log("The sum is :",result2);
console.log("The sum is :",result3);

function sum(a,b,c=9){
    // console.log(a+b);
    return a + b + c;
}

console.log("The sum is :",result1);
console.log("The sum is :",result2);
console.log("The sum is :",result3);

const func1 = (x)=>{
    console.log("I am an arrow Function",x)
}

func1(34);
func1(66);
func1(87);