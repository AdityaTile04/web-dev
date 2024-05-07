//! Event listners for elements

let para = document.querySelector("p");

para.addEventListener("click", function () {
  console.log("para was clicked");
});

let box = document.querySelector(".box");

box.addEventListener("mouseenter", function () {
  console.log("Mouse is inside the box");
});

let head = document.querySelector("h1");

head.addEventListener("mouseenter", function () {
  console.log("you entered in heading");
});
