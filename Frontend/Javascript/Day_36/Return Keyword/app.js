//! Return Keyword
// return keyword is used to return some value from the function

// Example 1
function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2));

// Example 2
function isAdult(age) {
  if (age > 18) {
    return "adult";
  } else {
    return "not adult";
  }
}
console.log(isAdult(19));

// Example 3
function numbers(n) {
  let sum = 0;
  for (i = 0; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(numbers(100));
