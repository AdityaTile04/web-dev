//! Call Stack in JS

function name() {
  console.log("Aditya");
}

function printName() {
  name();
}

printName();

//! Visualizing tha call stack

function one() {
  return 1;
}

function two() {
  return one() + one();
}

function three() {
  let ans = two() + one();
  console.log(ans);
}

three();

function a() {
  return 2;
}

function b() {
  return a() * a();
}

function c() {
  let ans = a() * b();
  console.log(ans);
}

c();

function x() {
  return 5;
}

function y() {
  return x() ** x();
}

function z() {
  let value = x() + y();
  console.log(value);
}

z();
