//! Question 1

const arrAvg = (array) => {
  let total = 0;
  for (let number of array) {
    total += number;
  }
  return total / array.length;
};

let array = [1, 2, 3, 4, 5, 6];
console.log(arrAvg(array));

//! Question 2

const isEven = (n) => {
  if (n % 2 == 0) {
    console.log(`${n} is even`);
  } else {
    console.log(`${n} is odd`);
  }
  return n;
};
console.log(isEven(2));

//! Question 3
const object = {
  message: "Hello, World!",

  logMessage() {
    console.log(this.message);
  },
};

setTimeout(object.logMessage, 1000);

//! Question 4

let lenght = 4;
function callback() {
  console.log(this.message);
}
const object2 = {
  lenght: 5,
  method(callback) {
    callback();
  },
};

object2.method(callback, 1, 2);
