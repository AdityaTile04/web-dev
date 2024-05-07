//! Nested loops with nested arrays

// Exapmle 1
let heroes = [
  ["ironman", "thor", "loki"],
  ["batman", "superman", "flash"],
];

for (i = 0; i < heroes.length; i++) {
  console.log(heroes[i], heroes[i].length);
  for (j = 0; j <= heroes[i].length; j++) {
    console.log(`j= ${j}, ${heroes[i][j]}`);
  }
}

// Example 2
let students = [
  ["Aditya", "Gaurav", "Kunal"],
  ["Rushi", "Saurabh", "Shubham"],
];

for (i = 0; i < students.length; i++) {
  console.log(students[i]);
  for (j = 0; j < students[i].length; j++) {
    console.log(`roll${j},${students[i][j]}`);
  }
}

// Example 3
let players = [
  ["dhoni", "rahane", "jadeja"],
  ["virat", "maxwell", "faf"],
];

for (let i =0; i< players.length; i++){
  console.log(players[i]);
  for(let j = 0; j<=players[i].length; j++){
    console.log(j,players[i][j]);
  }
}