//! Assignment Question 1

let arr = ["8", "9", "10", "1", "2", "3", "4", "5", "6", "7"];
let num = 5;

function getElements(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      console.log(arr[i]);
    }
  }
}
getElements(arr, num);

//! Assignment Question 2

let str = "abcdabcdefgggh";

function getUnique(str) {
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    let currChar = str[i];
    if (ans.indexOf(currChar) == -1) {
      ans += currChar;
    }
  }
  return ans;
}
console.log(getUnique(str));

//! Assignment Question 3

let country = ["Australia", "Germany", "United States of America"];

function longestName(country) {
  let ansIdx = 0;
  for (let i = 0; i < country.length; i++) {
    let ansLen = country[ansIdx].length;
    let currLen = country[i].length;
    if (currLen > ansLen) {
      ansIdx;
    }
  }
  return country[ansIdx];
}
console.log(longestName(country));

//! Assignment Question 4

let string = "AdityaTile";

function countVowels(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (
      string.charAt(i) == "a" ||
      string.charAt(i) == "e" ||
      string.charAt(i) == "i" ||
      string.charAt(i) == "o" ||
      string.charAt(i) == "u"
    ) {
      count++;
    }
  }
  return count;
}
console.log(countVowels(string));

//! Assignment Question 5
let start = 100;
let end = 200;

function generateRandom(start, end) {
  let diff = end - start;
  return Math.floor(Math.random() * diff) + start;
}
console.log(generateRandom(start, end));
