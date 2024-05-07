//! Style Manipulating

// Example 1
let head = document.querySelector("h1");
head.style.color = "red";
head.style.backgroundColor = "black";

// Example 2
let img = document.querySelector("img");
img.style.borderRadius = "15%";

// Example 3
let para = document.querySelector("#description");
(para.style.backgroundColor = "yellow"), (para.style.fontSize = "20px");

// Example 3
let links = document.querySelectorAll(".box a");

for (link of links) {
  link.style.color = "red";
}

for (i = 0; i < links.length; i++) {
  links[i].style.backgroundColor = "white";
}
