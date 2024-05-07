//! break keyword

// Example
let i = 1;

while (i <= 5) {
  if (i == 3) {
    break;
  }
  console.log(i);
  i++;
}

// Example 2
let num = 1;

while (num <= 50) {
  if (num == 26) {
    break;
  }
  console.log(num);
  num++;
}

//! Movie guess game
let favMovie = "Intersteller";
let guess = prompt("Enter Movie Name");

while (guess != favMovie) {
  if (guess == "quite") {
    console.log("you quite");
    break;
  }
  guess = prompt("try again");
}

if (guess == favMovie) {
  console.log("Congratulations");
} 