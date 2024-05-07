//! while loop in JS

// forward
let j = 1;

while (j <= 5) {
  console.log(j);
  j++;
}

// backward
let l = 5;

while (l >= 1) {
  console.log(l);
  l--;
}

//! Printing even numbers using while loop
let i = 2;

while (i <= 30) {
  console.log(i);
  i = i + 2;
}

//! Printing odd numbers using while loop

let k = 1;

while (k <= 20) {
  console.log(k);
  k = k + 2;
}

//! Multiplication table using while loop

let a = 5;

while (a <= 50) {
  console.log(a);
  a = a + 5;
}

//! Favorite Movie

let favMovie = "Intersteller";
let guess = prompt("Enter Movie Name");

while (guess != favMovie && guess != "quite") {
  guess = prompt("try again");
}

if (guess == favMovie) {
  console.log("Congratulations");
} else {
  console.log("you quite");
}
