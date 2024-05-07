// Question 1

let num = 20;

if (num % 10 == 0) {
  console.log("Good");
} else {
  console.log("Bad");
}

// Question 2

let name = prompt("Enter your name :");
let age = prompt("Enter your age :");

alert(`${name}` + "is" + " " + `${age}` + " " + "year old");

// Question 3

let months = 1;

switch (months) {
  case 1:
    console.log("January,February,March");
    break;
  case 2:
    console.log("April, May, June");
    break;
  case 3:
    console.log("July,August,September");
    break;
  case 4:
    console.log("Octomber,November,December");
    break;
  default:
    console.log("Please enter valid number");
}

// Question 4

let str = "Aditya";

if (str.length > 5 && str[0] === "A") {
  console.log("Golden");
} else {
  console.log("Not Golden");
}

// Question 5

let a = 20;
let b = 40;
let c = 80;

if (a > b) {
  if (a > c) {
    console.log(a, "is Largest");
  } else {
    console.log(c, "is Largest");
  }
} else {
  if (b > a) {
    console.log(b, "is Largest");
  } else {
    console.log(c, "is Largest");
  }
}

// // Question 5

let num1 = 32;
let num2 = 47852;

if (num1 % 10 == num2 % 10) {
  console.log("numbers have same lase digit which is", num1 % 10);
} else {
  console.log("numbers dont have same last digit");
}
