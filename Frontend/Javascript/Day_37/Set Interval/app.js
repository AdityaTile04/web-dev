//! Set Interval Function

// Example 1
const id = setInterval((name) => {
  console.log("Aditya Tile");
}, 2000);
console.log(id);
clearInterval(id); // to stop interval

// Example 2
const id2 = setInterval(() => {
  console.log("Hello");
}, 3000);

console.log(id2);
clearInterval(id2); // to stop interval
