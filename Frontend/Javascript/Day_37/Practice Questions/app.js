//! Practice Question 1

const square = (n) => {
  return n * n;
};
console.log(square(3));

//! Practice Question 2

let id = setInterval(() => {
  console.log("Hello World");
}, 2000);

setInterval(() => {
  clearInterval(id);
  console.log("stop");
}, 10000);
