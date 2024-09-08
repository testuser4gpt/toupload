console.log("hello");

setTimeout(() => {
  console.log("Kapil");
}, 5000);
// a basic callback, uses setTimeout, also we can use regular functions in place of anonymous function

// fetch() returns us a promise

const promise_obj = fetch("xyz.api");

// Promise chaining is done by 

.then(promise_obj)
.then (promise_obj)
.then(promise_obj)