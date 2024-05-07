//! JSON (Javascript Object Notation)

// Methods

//! 1.JSON.parse(data)
// to parse a string data into a js object.

let jsonRes =
  '{"fact":"Purring does not always indicate that a cat is happy and healthy - some cats will purr loudly when they are terrified or in pain.","length":129}';

const newRes = JSON.parse(jsonRes);
console.log(newRes);

//! 2.JSON.stringify(json)
// to parse js object data into JSON

const demoObj = {
  name: "Aditya",
  age: 19,
  gender: "Male",
};

const conObj = JSON.stringify(demoObj);
console.log(conObj);
