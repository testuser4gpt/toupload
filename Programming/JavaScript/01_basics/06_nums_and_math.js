const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1)); // shorts the decimal precision value to 1,  result = 100.0

const otherNumber = 123.8961;

// console.log(otherNumber.toPrecision(4)); // shorts to the precise whole value // outputs : 123.9
// console.log(otherNumber.toPrecision(5)); // outputs : 123.90

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));
// .tolocaleString() converts into US Standard comma to the numbers, To convert for different standard use code
// like "en-IN" etc

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log(Math.random().toFixed(1));
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
