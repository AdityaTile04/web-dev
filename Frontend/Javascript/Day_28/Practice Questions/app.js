//! Practice Questio 1

let months = ["january", "july", "march", "august"];
let newMonths = months.splice(0, 1);
months.splice(1, 0, "june");
console.log(months);

//! Practice Question 2
let lang = ["c", "c++", "html", "javascript", "python", "java", "c#", "sql"];
let revLang = lang.reverse().indexOf("javascript");
console.log(revLang);

//! Practice Question 3

let game = [
  ["X", null, "O"],
  [null, "X", null],
  ["O", null, "X"],
];
console.log(game);
