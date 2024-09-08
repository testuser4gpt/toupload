//var c = 300
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "hitesh";

  function two() {
    const website = "youtube";
    console.log(username);
  }

  two();
  //console.log(website); // cant be used since website's inside two() scope. // reference error
}

one();

if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const website = " youtube";
    // console.log(username + website);
  }
  // console.log(website);
}

// console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5));

function addone(num) {
  return num + 1; // function
}

addTwo(5);
const addTwo = function (num) {
  return num + 2; // Function expression
};

// global and local var
let ultimate = 3.154;

function change_ultimate(args) {
  //ultimate = 100;

  let ultimate = 3467;
  console.log("Inside local Scope : ", ultimate);
}

change_ultimate();
console.log(ultimate);

// In simpler words : Global var if changed directly without initialization inside function,
//It changes globally
