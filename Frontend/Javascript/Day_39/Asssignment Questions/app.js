//! Question 1

let nums = [1, 2, 3, 4, 5];

const square = nums.map((num) => {
  return num * num;
});
console.log(square);

const sum = square.reduce((acc, el) => {
  return acc + el;
});
console.log(sum);

let avg = sum / nums.length;

console.log(avg);

//! Question 2

let numbers = [2, 4, 6, 8, -2, -4];
console.log(numbers.map((numbers) => numbers + 5));

//! Question 3

let str = ["Aditya", "Gaurav", "Kunal", "Rushi"];
console.log(str.map((str) => str.toUpperCase()));

//! Question 4

const doubleAndReturnArgs = (arr, ...args) => [
  ...arr,
  ...args.map((v) => v * 2),
];
console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));
console.log(doubleAndReturnArgs([2], 10, 4));

//! Question 5

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 });
console.log();
