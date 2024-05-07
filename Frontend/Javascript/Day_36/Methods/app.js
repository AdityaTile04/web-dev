//! Methods
// Action that can be performed on an object

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  mul: function (a, b) {
    return a * b;
  },
};
console.log(calculator.mul(2, 2));

//! Shorthand of method

const addSubMul = {
  add(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
  mul(a, b) {
    return a * b;
  },
};

console.log(addSubMul.add(2, 5));
