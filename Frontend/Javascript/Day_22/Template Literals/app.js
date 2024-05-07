// Template Literals
// They are used to add embedded expression in a string

// Example 1

let bookPrice = 120;
let textBookPrice = 200;

let totalPrice =
  "Total price:" + " " + `${bookPrice + textBookPrice}` + " " + "rupees";

// console.log(totalPrice);

// Example 2

let biologyBooks = 220;
let mathBooks = 80;
let physicsBooks = 70;
let marathiBooks = 90;

let totalBooks =
  "Total books are:" +
  " " +
  `${biologyBooks + mathBooks + physicsBooks + marathiBooks}` +
  " " +
  "rs only";

console.log(totalBooks);
