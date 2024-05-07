//! Js is single threded language

//! single threaded means JS executes code one by one

// In this following example their are 5 lines of code, Javascript executes the code of line one by one

// This type of code called synchronous nature of code

// Synchronous means line of code executes one by one.

let a = 5;
console.log(a);
let b = 5;
console.log(b);
console.log(a + b);

//! Asynchronous nature of code

//! Asynchronous means code of line not executed one by one

// In this following example setTimeout function print afer delay of 2s

// Example
console.log("One");

setTimeout(() => {
  console.log("Two");
}, 2000);

console.log("Hello");
