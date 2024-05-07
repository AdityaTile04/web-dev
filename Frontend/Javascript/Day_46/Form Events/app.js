//! Form Events

let form = document.querySelector("form");
let inp = document.querySelector("input");

form.addEventListener("submit", formData);

function formData(event) {
  event.preventDefault();
  console.log("user register succesfully");
}
