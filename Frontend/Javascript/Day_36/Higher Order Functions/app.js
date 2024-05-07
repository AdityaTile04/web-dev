//! Higher Order Functions
//! Takes one or multiple functions as argument

// Example 1
function multipleGreets(func, n) {
  for (i = 1; i <= n; i++) {
    func();
  }
}
let greet = function () {
  console.log("Namaste");
};
multipleGreets(greet, 10);

// Example 2

function printName(value, name) {
  for (i = 1; i <= name; i++) {
    value();
  }
}
let print = function () {
  console.log("Aditya");
};

printName(print, 10);

//! Return a Function

// Example 1

function evenOddFactory(request) {
  if (request == "even") {
    return function (n) {
      console.log(n % 2 == 0);
    };
  } else if (request == "odd") {
    return function (n) {
      console.log(!(n % 2 == 0));
    };
  } else {
    console.log("wrong request");
  }
}
request = "even";
let func = evenOddFactory(request);
console.log(func(4));
