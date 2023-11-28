// Array are mutable : can be changed


let arr = [1,2,4,5,7];
// index   0 1 2 3 4

arr[0] = 5666;
// console.log(arr);
// console.log(typeof(arr));
// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);




// String are immutable cant be changed
// let a = "Harry";
// a[0] = "K";
// console.log(a);


console.log(arr.toString())       //Convert to String

console.log(arr.join(" and "));
a = [1,2,3,4,5,6];
console.log(a)
a.pop();
console.log(a);
a.push(100);
console.log(a);
a.shift()      //REmove 1st elememt
console.log(a)
a.unshift("Jack");  //opposite to shift
console.log(a);
delete a[4];
console.log(a);
let a1 = [1,2,3];
let a2 = [4,5,6];
let a3 = [9,8,7];
let a4 = a1.concat(a2,a3);
console.log(a4);
let a5 = [5,8,2];
console.log(a5.sort());
const num = [1,2,3,4,5];
console.log(num.splice(2,1,23,24));
// console.log(num.splice(1,2));
/*
2 -> position to add
1 -> no of elements to remove
23,24 -> elemts to be added
*/