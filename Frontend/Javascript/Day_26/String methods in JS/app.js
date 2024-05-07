//! slice Method in JS
// Return a part of the original string as a new string

//Example 1
let str = "IloveCoding";
console.log(str.slice(1));
console.log(str.slice(1, 5));
console.log(str.slice(-1));

//Example 2
let name = "AdityaTile";
console.log(name.slice(6));
console.log(name.slice(0, 6));
console.log(name.slice(-4));

//! replace method in JS
//Searches a value in the string & return a new string with the value replaced

// Example 1

let myName = "AdityaTile";
console.log(myName.replace("Aditya", "Bablu"));
console.log(myName.replace("Tile", "tile"));

// Exapmle 2
let clg = "MatoshriCollegeOfEngineering";
console.log(clg.replace("Engineering", "Pharmacy"));
console.log(clg.replace("Matoshri", "PCOE"));

//! repeat method
//Returns a string with number of copies of a string

// Exapmle 1
let friut = "Mango";
console.log(friut.repeat(5));

// Exapmle 2
let num = "10";
let print = num.repeat(20);
console.log(print);
