//! Arrow Funtions

// Example
const sum = (a, b) => {
  console.log(a + b);
};
sum(2, 4);

// Example 2
const table = (n) => {
  for (let i = n; i <= n * 10; i = i + n) {
    console.log(i);
  }
};
table(3);

// Example 2
const vote = (age) => {
  if (age >= 18) {
    console.log("You can vote");
  } else {
    console.log("You can not vote");
  }
};
vote(15);

//! Implicit return
// Example 1
const mul = (a, b) => a * b;
console.log(mul(2, 5));

// Example 2
const add = (a, b) => a + b;
console.log(add(6, 6));
