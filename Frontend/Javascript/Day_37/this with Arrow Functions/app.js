//! this with Arrow Function

const student = {
  name: "Aditya",
  marks: 95,
  prop: this, // global scope
  getName: function () {
    console.log(this); // parent's scope = student
    return this.name;
  },
  getMarks: () => {
    console.log(this); // parent's scope = window
    return this.marks;
  },
  getInfo1: function () {
    setTimeout(() => {
      console.log(this); // student
    }, 2000);
  },
  getInfo2: function () {
    setTimeout(function () {
      console.log(this); // window
    }, 3000);
  },
};
