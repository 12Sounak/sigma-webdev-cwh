console.log("Hey this is tut 55");

// always try to use 'let' in modern jS
let a = 5;
a = a + 1;
let b = 6;
let c = "Hello world";
let _a = "Shubham"     //This is a valid variable name
// var 55a = "rohan"   //this is invalid variable name as it cannot start from number

// var vs let in jS
// 1> var is globally scoped while let and const r blocked scoped
// 2> var can be updated & re-declared a within its scope
// 3> let can be updated but not re-declared
// 4> const can neither be updated not be re-declared



// console.log(a+b);
// console.log(typeof a,typeof b, typeof c);
{                              //this is a block
    let a = 66;
    console.log(a);             //look a from global 

}

console.log(a);        //outside a is globally scoped, if in case of let var is usd it should have printed 66 coz it 
                       //is globally scoped






// const a1=6;
// a1 = a1 + 1;          This is not allowed as the variable type is const




// Primitive datatype vs Objects:
    // primitive data types are a set of basic data types in jS 
    // Object is a non  primitive datatype in javaScript

    // These are the 7 primitive data types in jS:
    // 1>null 2>Number 3>string 4>symbol 5>undefined 6>boolean 7>bigint 

    

let x = "harry bhai";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null
console.log(x,y,z,p,q,r);
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r);

// typeof null is object not null



// Object: combination of key and value pair
    // An Object in jS can be created as follows:
        // // eg:
        // const item = {
        //     name: "led bulb",              here name and price are the key and
        //     price: "150"                   led bulb and 150 are values
        // }



let o = {
    "name": "Harry",
    "job code": 5600,
    "ishandsome":true
}

console.log(o);

o.salary = "100cr";
console.log(o)

o.salary = "500cr";
console.log(o)

