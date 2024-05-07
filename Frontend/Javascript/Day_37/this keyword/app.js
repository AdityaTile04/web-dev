//! this keyword
// "This" keyword refers to an object that is executing the current piece of code

// Example
const student = {
  name: "Aditya",
  age: 19,
  marathi: 93,
  eng: 95,
  phy: 92,
  chem: 90,
  stdAvg() {
    let avg = (this.eng, this.marathi, this.phy, this.chem) / 3;
    console.log(`${this.name} has avg of ${avg}`);
  },
};

// Example 2
const radius = {
  r: 5,
  rad() {
    let rad = Math.floor(Math.PI * this.r ** 2);
    console.log(`radius is ${rad}`);
  },
};

// Example 3
