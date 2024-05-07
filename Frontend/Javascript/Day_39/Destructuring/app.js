//! Destructuring
// Storing values into multiple variables

// Example 1
let heroes = ["bruce", "tony", "peter", "vision"];

let [winner, runnerUp, ...others] = heroes;

// Example 2
let numbers = [1, 2, 3, 4, 5, 6];

let [one, two, three, ...other] = numbers;

//! Destructuring in objects

// Example 1
const sudentInfo = {
  name: "Aditya",
  age: 19,
  email: "abc@gamail.com",
  password: "abcd",
  city: "Banglore",
};

let { name, age, email, password: pass, username = "aditya@123" } = sudentInfo;

// Example 2
const product = {
  productName: "i phone 15",
  price: "70.000",
  storage: "128gb",
  ram: "4gb",
  processor: "A 17 bionic",
};

let { productName, price, ram, discountPrice = "65,000" } = product;
