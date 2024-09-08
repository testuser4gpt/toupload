const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros) // creates a nested array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) // concats into a single array
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]; // spread operator

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// .flat() : flats multidimensional array
const real_another_array = another_array.flat(Infinity); // flat(depth) : How much depth it should be flatenned
console.log(real_another_array);

console.log(Array.isArray("Hitesh")); // checks if given parameter is an array
console.log(Array.from("Hitesh")); // creates an array from an iterable object
console.log(Array.from({ name: "hitesh" })); // interesting // doesn't make an array : returns empty {} obj

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
//The Array.of() method in JavaScript is used to create a new Array instance with a variable number of arguments
