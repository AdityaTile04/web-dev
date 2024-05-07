//! Array Methods

//! 1.forEach

// Example 1
let arr = ["Aditya", "Kunal", "Gaurav"];

const print = function (el) {
  console.log(el);
};
arr.forEach(print);

// Example 2
arr.forEach((el) => {
  console.log(el);
});

//! For Objects

const student = [
  {
    name: "Aditya",
    marks: 93,
  },
  {
    name: "Kunal",
    marks: 90,
  },
  {
    name: "Gaurav",
    marks: 91,
  },
];

student.forEach((element) => {
  console.log(element.marks);
});

// Example

const studentInfo = [
  {
    name: "Aditya",
    marks: 95,
    roll_no: 70,
  },
  {
    name: "Kunal",
    marks: 94,
    roll_no: 14,
  },
  {
    name: "Rushikesh",
    marks: 93,
    roll_no: 30,
  },
];

studentInfo.forEach((info) => {
  console.log(info.name);
});

//! 2.Map

// Example 1
let num = [1, 2, 3, 4];

const double = num.map(function (el) {
  return el * 2;
});

// Example 2
const students = [
  {
    name: "Aditya",
    marks: 95,
    roll_no: 70,
  },
  {
    name: "Kunal",
    marks: 94,
    roll_no: 14,
  },
  {
    name: "Rushikesh",
    marks: 93,
    roll_no: 30,
  },
];

const cgpa = students.map((el) => {
  return el.marks / 10;
});

//! 3.filter

// Example 1
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const even = nums.filter((el) => {
  return el % 2 == 0;
});
console.log(even);

//! 4.every
// Returns true if every elementof array gives true for some function. Else returns false.

// Example 1
let numbers = [2, 4, 6, 8];

const check = numbers.every((num) => {
  return num % 2 == 0;
});

console.log(check);

// Example 2
let name = ["Aditya", "Kunal", "Gaurav"];

const length = name.every((len) => {
  return len.length > 4;
});
console.log(length);

//! 5.reduce
// Reduces the array to a single value

let number = [1, 2, 3, 4];

const reduce = number.reduce((res, el) => {
  return res + el;
});
console.log(reduce);

//! find maximum value using reduce

let arr1 = [1, 2, 4, 6, 3, 8, 9, 7, 4];
let max = 0;

for (let i = 0; i < arr1.length; i++) {
  if (max < arr1[i]) {
    max = arr1[i];
  }
}
console.log(max);

//! using reduce

let arr2 = [2, 4, 7, 5, 4, 8, 8, 9, 11, 3, 5, 20];

const ans = arr2.reduce((max, el) => {
  if (max < el) {
    return el;
  } else {
    return max;
  }
});
console.log(ans);
