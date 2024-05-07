//! Question 1

let arr = [7, 9, 0, -2];
let n = 3;
let ans = arr.slice(0, n);
console.log(ans);

//! Question 2

let array = [7, 9, 0, -2];
let n1 = 3;
let ans1 = array.slice(array.length - n);
console.log(ans1);

//! Question 3

let str = prompt("please enter the string");

if (str.length == 0) {
  console.log("String is empty");
} else {
  console.log("string is not empty");
}

//! Question 4
let name = "aDitYatIle";
let idx = 3;

if (name[idx] == name[idx].toLowerCase()) {
  console.log("character is lower case");
} else {
  console.log("character is not lower case");
}

//! Question 5
let str2 = prompt("Please enter the string");
console.log(`Original string = ${str}`);
console.log(`string without spaces = ${str.trim()}`);

//! Question 6
let arr2 = ["Hello", "a", 23, 64, 99, -6];
let item = 64;

if (arr.indexOf(item) != -1) {
  console.log("element exists in array");
} else {
  console.log("element dosent exist in array");
}
