const name = "hitesh";
const repoCount = 50;

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// This is called string interpolation

const gameName = new String("hitesh-hc-com");

// The difference between const vaar = new String() and let vaar = "string"
// The new String() creates a string object, It is object wrapper around the primitive string
// Uses more memory and less efficient

// Where as , let vaar = "anyname" is a primitive string, Basic data type, Optimized for performance
// It is faster and memory efficient, Since directly stored.

// console.log(gameName[0]);
// console.log(gameName.__proto__); // __proto__ contains methods such as length and toUpperCase

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4);
console.log("substring = ", newString);

const anotherString = gameName.slice(-8, 4);
console.log("slice = ", anotherString);

const newStringOne = "   hitesh    ";
console.log(newStringOne);
console.log(newStringOne.trim());

// There are two more methods : .trimStart and .trimEnd

const url = "https://hitesh.com/hitesh%20choudhary";

console.log(url.replace("%20", "-"));

console.log(url.includes("sundar"));

console.log(gameName.split("-"));

// raw string : using `` back ticks, using escape \ or using String.raw("")

console.log("none\\nds\\d\\gds\\sgr\\drs");
