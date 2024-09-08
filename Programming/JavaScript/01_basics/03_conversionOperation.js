let score = "hitesh";

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score);
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

// Explicit conversion
a = 33;
b = "34.5";
c = 99.8;
d = "45";
new_b = parseInt(b);
console.log(new_b, typeof new_b);
console.log(String(a));
console.log(Number(b));
console.log(parseInt(d));
console.log(parseInt(c));
console.log(parseFloat(b));
console.log(parseFloat(a));

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

let isLoggedIn = "hitesh";

let booleanIsLoggedIn = Boolean(isLoggedIn);

var_n = "";
let newbool = Boolean(var_n);
console.log(newbool);

//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

// Implicit conversion

let num = 123;
let str = "The number is " + num;
console.log(str); // Output: "The number is 123"

let strr = "456";
let sum = strr - 123;
console.log(sum); // Output: 333

// *********************** Operations ***********************

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello";
let str2 = " hitesh";

let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
