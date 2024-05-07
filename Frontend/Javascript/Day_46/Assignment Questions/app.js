//! Assignment Questions

//! Assignment Question 1

let body = document.querySelector("body");
let addBtn = document.createElement("button");
addBtn.innerHTML = "Submit";

body.append(addBtn);

addBtn.addEventListener("click", function () {
  addBtn.style.backgroundColor = "green";
  addBtn.style.color = "white";
});

//! Assignment Question 2

let btn = document.querySelector("button");
let para = document.querySelector("p");

btn.addEventListener("mouseout", function () {
  console.log("Hello!");
  btn.style.backgroundColor = "purple";
  btn.style.color = "white";
});

try {
  let inp = document.querySelector("input");
  let head = document.querySelector("h2");

  inp.addEventListener("input", function (event) {
    event.preventDefault();
    head.innerHTML = this.value;
    console.log(this.value);
  });
} catch (error) {
  btn.addEventListener("keypress", function () {
    console.log("Key was pressed");
  });

  para.addEventListener("scroll", function () {
    console.log("scroll was done.");
  });

  btn.addEventListener("load", function () {
    console.log("button load succesful.");
  });
}
