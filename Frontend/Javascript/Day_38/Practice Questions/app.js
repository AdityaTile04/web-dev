//! Practice Question 1

let arr = [10, 20, 30, 40];

const mul = arr.every((el) => {
  return el % 10 == 0;
});
console.log(mul);

//! Practice Question 2

let num = [2, 1, 2, 3, 6, 7, 3, 1, 4, 3, 5];

function getMin(num) {
  const ans = num.reduce((min, el) => {
    if (min > el) {
      return el;
    } else {
      return min;
    }
  });
  return ans;
}
console.log(getMin(num));
