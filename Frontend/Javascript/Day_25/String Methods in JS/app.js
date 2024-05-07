// String Methods in JS
// Methods: Actions that can be performed on object

// formart:
// srtingName.method();

// 1.srt.trim()
// trim whitespaces from both ends of string & returns a new row

let msg = "       Hello       ";
console.log(msg.trim());

// 2.str.toLowerCase()

let name = "Aditya Tile";
console.log(name.toUpperCase());

// 3.str.toLowerCase()

let myName = "Aditya Tile";
console.log(myName.toLowerCase());

// String method with arguments
// Arguments is a some value that we pass to the method

// Format
// stringName.method(args)

// 1.indexOf
// Return the first index of occurence of some value in string.or give -1 if not found

let str = "My name is Aditya Tile";
console.log(str.indexOf("Aditya"));
console.log(str.indexOf("Tile"));
console.log(str.indexOf("name"));
console.log(str.indexOf("i"));
console.log(str.indexOf("not")); // -1(Not found)

// Method chaining
// Using one method after another, order execution will be left to right

// Example 1
let newMgs = "  Hello  ";
let print = newMgs.trim().toUpperCase();
console.log(print);

// Example 2
let city = "   Nashik";
let newCity = city.trim().toLowerCase();
console.log(newCity);
