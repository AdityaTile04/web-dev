//! Event Listener

//! addEventListener

let btn = document.querySelector("button");

function name() {
  console.log("Aditya Tile");
}

function college() {
  console.log("MCOERC");
}

btn.addEventListener("click", name);
btn.addEventListener("click", college);

btn.addEventListener("click", function rollNo() {
  console.log(`roll no is 70`);
});

btn.addEventListener("dblclick", function post() {
  console.log("software engineer");
});

let newBtn = document.querySelector(".sub-btn");

newBtn.addEventListener("click", function () {
  console.log("you submit the button");
});

newBtn.addEventListener("dblclick", function () {
  console.log("you clicked double");
});
