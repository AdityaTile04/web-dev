
//! splice method
// removes / replace / add elements in place
// splice(start,deleteCount,item0...itemN)

let newCars = ["audi", "bmw", "mercedes", "toyota", "ferrari"];
console.log(newCars);
console.log(newCars.splice(2));
console.log(newCars.splice(1, 0, "mahindra"));
console.log(newCars.splice(0, 0, "xuv", "honda"));
console.log(newCars.splice(1, 0, "nissan"));
console.log(newCars.splice(2, 2, "buggati"));

// Example 2
let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
console.log(days.splice(6));
console.log(days.splice(0, 6));
console.log(days.splice(0, 0, "Monday"));

//! sort method
// sort an array

// Example 1
let chars = ["a", "b", "c", "d", "e"];
console.log(chars.sort());
