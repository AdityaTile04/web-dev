//! classList

//! to add class
let heading = document.querySelector("h1");
heading.classList.add("head");

let line = document.querySelector("h1");
line.classList.add("underline");

//! to remove class
let remove = document.querySelector("h1");
remove.classList.remove("head");

//! to check if class exists
let check = document.querySelector("h1");
console.log(check.classList.contains("underline"));

//! to toggle between add & remove
let head = document.querySelector("h1");
head.classList.toggle("head");

let head1 = document.querySelector("h1");
head.classList.toggle("underline");

let head3 = document.querySelector("h1");
head.classList.toggle("underline");

let img = document.querySelector("img");
img.classList.toggle("spidyImg");

let img1 = document.querySelector("img");
img.classList.toggle("spidyImg");

let img2 = document.querySelector("img");
img.classList.toggle("spidyImg");
