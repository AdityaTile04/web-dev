//! loops with array

// Example 1
let fruits = ["apple", "banana", "mango", "orange", "papaya"];
for (let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i]);
}

// Example 2
let cars = ["bmw", "audi", "mercedes", "toyota", "ford"];
cars.push("maruti");

// forward
for (i = 0; i < cars.length; i++) {
  console.log(i, cars[i]);
}
// backward
for (i = cars.length - 1; i >= 0; i--) {
  console.log(i, cars[i]);
}

//! Array using while loop

// Example 1
let arr = ["Aditya", "Gaurav", "Kunal", "Rushikesh"];
let i = 0;
while (i < arr.length) {
  console.log(i, arr[i]);
  i++;
}

// Example 2
const carBrands = ["audi", "bmw", "toyota", "mercedes", "maruti"];
carBrands.push("Honda");
let num = 0;

while (num < carBrands.length) {
  console.log(num, carBrands[num]);
  {
    num++;
  }
}
