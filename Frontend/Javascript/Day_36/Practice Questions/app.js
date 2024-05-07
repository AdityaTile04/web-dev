//! Practice Question 1

function printPoem() {
  console.log("twinkle twinkle, little star ");
  console.log("how i wonder what you are");
}
printPoem();

//! Practice Question 2

// Method 1
function diceRoll() {
  let num = Math.random();
  num = num * 6;
  num = Math.floor(num);
  num = num + 1;
  console.log(num);
}
diceRoll();

// Methood 2

function rollDice() {
  let random = Math.floor(Math.random() * 6) + 1;
  console.log(random);
}
rollDice();

//! Practice Question 3

function average(a, b, c) {
  avg = (a + b + c) / 3;
  console.log(avg);
}
average(4, 4, 6);

//! Practice Question 4

function printTable(num) {
  for (i = num; i <= num * 10; i += num) {
    console.log(i);
  }
}
printTable(5);

//! Practice Question 5
function numbers(n) {
  let sum = 0;
  for (i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(numbers(20));

//! Practice Question 6

let str = ["Aditya", "Tile"];

function conact(str) {
  let result = "";
  for (i = 0; i < str.length; i++) {
    result += str[i];
  }
  return result;
}
console.log(conact(str));

//! Practice Question 7

let greet = "hello";

function changeGreet() {
  let greet = "namaste";
  console.log(greet);
  function innerGreet() {
    console.log(greet);
  }
}
console.log(greet);
changeGreet();