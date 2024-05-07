//! Math Object

console.log(Math.PI);
console.log(Math.E);

//! Methods

console.log(Math.abs(-5));
console.log(Math.pow(2, 4));
console.log(Math.floor(5.555)); // Smallest
console.log(Math.ceil(5.555)); // Largest
console.log(Math.random());

//! Random Integers from 1 t0 10

let num = Math.random();
num = num * 10;
num = Math.floor(num);
num = num + 1;
// console.log(num);

//! Generate random numbers between 1 to 100

let num1 = Math.random();
num1 = num1 * 100;
num1 = Math.floor(num);
num1 = num1 + 1;
// console.log(num1);

//! Generate random numbers between 1 t0 5

let num2 = Math.random();
num2 = num * 5;
num2 = Math.floor(num2);
num2 = num2 + 1;
console.log(num2);
