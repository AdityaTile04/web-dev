//! More Events

//! 1.change Event
// the change event occurs when the value of an element has been changed (only works on <input>,<textarea> and <select> elements).

let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
});

let user = document.querySelector("#user");

user.addEventListener("change", function () {
  console.log(`user's changed value is ${user.value} `);
});

let pass = document.querySelector("#pass");

pass.addEventListener("change", function () {
  console.log(`changed password is ${pass.value}`);
});

//! input event
// the input event fires when the value of an <input>,<select>, or <textarea> element has been changed.

let text = document.querySelector("#text");

text.addEventListener("input", function () {
  console.log(text.value);
});

//! Activity

let inp = document.querySelector("#text1");
let para = document.querySelector("p");

inp.addEventListener("input", function (event) {
  event.preventDefault();
  let para = document.querySelector("p");
  para.innerText = inp.value;
  console.log(inp.value);
});
