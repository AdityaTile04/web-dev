//! Print odd numbers using for loop

// Forward
for (let i = 1; i <= 15; i = i + 2) {
  console.log(i);
}
// Backword
for (i = 15; i >= 1; i = i - 2) {
  console.log(i);
}

//! Print Even numbers using for loop

// Forward
for (let i = 2; i <= 10; i = i + 2) {
  console.log(i);
}
// Backward
for (let i = 10; i >= 2; i = i - 2) {
  console.log(i);
}

//! Infinite Loops
// it is a wrong type of writing loops

for (let i = 1; i >= 0; i++) {
  // console.log(i);
}

//! Print the multiplication table for 5

for (let i = 5; i <= 50; i = i + 5) {
  console.log(i);
}

let n = prompt("Write Your Number");
n = parseInt(n);

for (let i = n; i <= n * 10; i = i + n) {
  console.log(i);
}
