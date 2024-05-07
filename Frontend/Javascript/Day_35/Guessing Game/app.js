//! Guessing Game

const max = prompt("enter the number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");

while (true) {
  if (guess == "quite") {
    console.log("quite");
    break;
  }
  if (guess == random) {
    console.log("you guess right");
    break;
  } else if (guess < random) {
    guess = prompt("you guess to small! please try again");
  } else {
    guess = prompt("hint: your guess to was to large! please try again");
  }
}
