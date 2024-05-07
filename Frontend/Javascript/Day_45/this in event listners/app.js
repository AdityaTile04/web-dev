//! this in Event listners
// When 'this' is used in callback of event handler of something, it refers to that something

let btn = document.querySelector("button");
let head = document.querySelector("h1");
let para = document.querySelector("p");

function updateChanges() {
  console.log(this.innerText);
  this.style.backgroundColor = "Orange";
}

btn.addEventListener("click", updateChanges);
head.addEventListener("click", updateChanges);
para.addEventListener("click", updateChanges);

function updateElements() {
  this.style.backgroundColor = "purple";
  this.style.color = "white";
  this.style.border = "2px solid black";
  this.style.fontSize = "30px"
}

btn.addEventListener("mouseenter", updateElements);
head.addEventListener("mouseenter", updateElements);
para.addEventListener("mouseenter", updateElements);
