// Nested if-else in JS:
// Nesting is writing if-else in side if-else statement.it can have many levels

// Example 1
let marks = 80;

if (marks >= 35) {
  console.log("Pass");
  if (marks >= 80) {
    console.log("Grade : Outstanding");
  } else {
    console.log("Grade : Good");
  }
} else {
  console.log("better luck next time");
}

// Example 2

let fruit = "Mango";

if (fruit === "Apple") {
  console.log("Price is :");
  if (fruit === "Apple") {
    console.log("100rs per kg");
  }
} else {
  console.log("Please enter valid fruit name ");
}
