


console.log("This is Strings tutorial");
// Strings:
// 1> Strings are immutable : that means all the operations we do on any string the original strings remains the same.


let a = "John";
console.log(a);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);      //undefined

console.log(a.length);

let real_name = "Harry";
let friend = "Rohan";
console.log("His name is " + real_name + " and his friends name is " + friend);
console.log(`His name is ${real_name} and his friends name is ${friend}`);


b = "Shivam";
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.length);

console.log(b.slice(1,4));     //prints from 1 to 4-1
console.log(b.slice(1));       //prints till n from 1

console.log(b.replace("Sh","99"));
console.log(b.concat(a));
console.log(b.concat(a," Aishwariya"," Rahul"));

console.log(b);        //immutable it prints original

d = "Rohan";
console.log(d.indexOf("h"));

console.log(b.starts);
