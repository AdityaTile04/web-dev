//! for of loop in JS

// Example 1
let fruits = ["apple", "banana", "orange", "litchi", "mango"];

for (fruit of fruits) {
  console.log(fruit);
}

// Example 2
for (name of "Aditya") {
  console.log(name);
}

//! nested for of loop

let heroes = [
  ["ironman", "thor", "spiderman"],
  ["batman", "superman", "aquaman"],
];

for (list of heroes) {
  for (name of list) {
    console.log(name);
  }
}
