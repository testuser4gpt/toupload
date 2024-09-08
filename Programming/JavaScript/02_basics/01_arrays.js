// array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeors = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[1]);

// Array methods

// myArr.push(6) // adds an element to the last
// myArr.push(7,8,9)
// myArr.pop() // removes an element from the last of array

// myArr.unshift(9) // adds an element at the start of an array
//myArr.unshift(7,8,9)
// myArr.shift() // removes and element from the start of an array

// Using spread operator
// mymodarr = [...myArr,5,6,7,8,9] // adds myArr elements into the array

// console.log(myArr.includes(9)); // checks if element present inside an array
// console.log(myArr.indexOf(3)); // returns the index of element in an array
//console.log(myArr)
//const newArr = myArr.join() // converts array into string
console.log(myArr);
const newArr = myArr.join("-"); // can define the concatinaiton string, by default elements are seperated by ,
console.log(newArr);
// console.log( typeof newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

console.log("slice : ", myn1);
console.log(myArr);

const myn2 = myArr.splice(1, 3);
console.log(myArr);
console.log("splice : ", myn2);

// Difference between slice and splice is that Splice takes out the sliced array from the original array also it
// slices the last object too : splice(1,3) => takes 1,2,3
