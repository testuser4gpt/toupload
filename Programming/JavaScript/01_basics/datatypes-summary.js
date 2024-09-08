//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 3456543576654356754n;

// n notation in the end of a large integer number is used to denote a big int number
// alternatively we can do const bigNumber = BigInt(3456543576654356754);

console.log(typeof bigNumber);

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "hitesh",
  age: 22,
};

const myFunction = function () {
  console.log("Hello world");
};

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++==

// Primitive Data types - > Stack (Copies data)

// Non-Primitive Data Types - > Heap (reference data)

let ytname = "hostundefined";

let anotherName = ytname;

console.log(ytname, anotherName); // here another name got the copy of data of ytname

// Note that we cannot check the memory address in javascript

// For non primitive datatypes :

obj1 = {
  name: "Kpail",
  age: 12,
};

obj2 = obj1;
obj2.name = "Kapil Singh Dieolia";

console.log(obj1.name); // Note how obj1 changed upon changing obj2, That's how the reference works
