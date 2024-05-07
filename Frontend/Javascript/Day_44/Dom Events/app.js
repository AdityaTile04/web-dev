//! Dom Events
// Events are signals that something has occured.(user inputs / actions)

//! 1.onclick

// Example 1
let btns = document.querySelectorAll("button");

for (btnn of btns) {
  btnn.onclick = hello;
}

function hello() {
  console.log("Hello");
}

// Example 2
let btn = document.querySelector("#btn");
console.dir(btn);

btn.onclick = submit;

function submit() {
  console.log("button was submitted");
}

// Example 3
let btn2 = document.querySelector(".primary-btn");

function doneBtn() {
  alert("task was done");
}

btn2.onclick = doneBtn;

//! 2.onmouseenter

// Example 1
let btn3 = document.querySelector(".btn-two");

btn3.onmouseenter = function () {
  console.log("you entered!");
};

// Example 2

function enter() {
  console.log("You entered on this buttons");
}

for (btnn of btns) {
  btnn.onmouseenter = enter;
}


