//! Spread
// Exapands an iterable into multiple values

// Example 1
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(...arr);

// Example 2
let name = "AdityaTile";
console.log(...name);

// Example 3
let array = [2, 3, 4, 4, 6, 7, 8, 3, 1];
console.log(Math.min(...array));

//! Spread with array litrals

// Example 1
let arr1 = [1, 2, 3, 4, 5, 6, 7];
let newArr = [...arr];
console.log(newArr);

// Example 2
let str = "Aditya";
let newStr = [...str];

console.log(newStr);

//! Spread with object litrals

// Example 1
let data = {
  name: "Aditya",
  email: "abc@gmail.com",
};
let newData = { ...data, id: 123, country: "India" };

console.log(newData);

// Example 2
let productInfo = {
  category: "Electronics",
  name: "Vivo",
  model: "X80",
  price: "70,000",
};
let { category, price, discountPrice = "66,000", ...others } = productInfo;
