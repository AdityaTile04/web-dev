//! Extarcting Form Data

let form = document.querySelector("form");

// type 1
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let inp = document.querySelector("#user");
  let pass = document.querySelector("#pass");
  console.log(`username is ${inp.value} and password is ${pass.value}`);
});

// type 2
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let user = this.elements[0]; // form.elements[0]
  let pass = this.elements[1]; // form.elements[1]

  console.log(`username is ${user.value} and password is ${pass.value}`);
});
