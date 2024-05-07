//! Rest in JS
// Allows a function to take an indefinite number of argumument and bundle them in an array.

// Example 1
function sum(msg, ...args) {
  console.log(msg);
  return args.reduce((sum, el) => {
    sum + el;
  });
}

// Example 2
function min(...args) {
  let min = args.reduce((min, el) => {
    if (min < el) {
      return min;
    } else {
      return el;
    }
  });
  console.log(min);
}

// Example 3
function max(...args) {
  const max = args.reduce((max, el) => {
    if (max > el) {
      return max;
    } else {
      return el;
    }
  });
  console.log(max);
}

// Example 3
function even(...args) {
  const even = args.reduce((res, el) => {
    if (el % 2 == 0) {
      console.log("even");
    } else if (!(el % 2 == 0)) {
      console.log("odd");
    }
  });
  console.log(even);
}
