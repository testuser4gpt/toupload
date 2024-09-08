const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`); // this refers the current context
    console.log(this);
  },
};

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage() // outputs sam, since this.username was given inside the function

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); // works only with objects
// }

const chai = () => {
  let username = "hitesh";
  console.log(this);
};

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2                  // in curly braces it is to be retuned
// }

// const addTwo = (num1, num2) =>  num1 + num2 // Implicit return. Js understands this expression
// needs to be return, without mentioning return keyword

// const addTwo = (num1, num2) => ( num1 + num2 )

// Note : If wrapped inside curly braces then will need to write return keyword, else it will be a
// implicit return

const addTwo = (num1, num2) => ({ username: "hitesh" }); // returning object using Implicit return requires
// round brackets

console.log(addTwo(3, 4));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
