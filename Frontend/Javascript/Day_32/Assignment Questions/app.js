//! Question 1
let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == num) {
    arr.splice(i, 1);
  }
}
console.log(arr);

//! Question 2
let number = 287152;
let count = 0;

let copy = number;

while (copy > 0) {
  count++;
  copy = Math.floor(copy / 10);
}
console.log(count);

//! Question 3
let numb = 287152;
let cou = 0;

let cop = numb;

while (cop > 0) {
  digit = copy % 10;
  cou += digit;
  cop = Math.floor(copy / 10);
}
console.log(cop);

//! Question 4
let n = 5;
let factorial = 1;

for (let i = 1; i <= n; i++) {
  factorial *= i;
}
console.log(`factorial fo ${n} is ${factorial}`);

//! Question 5
let array = [2, 5, 10, 4, 2, 7, 1, 9];
let largest = 0;

for (let i = 0; i <= arr.length; i++) {
  if (largest < array[i]) {
    largest = array[i];
  }
}
console.log(largest);