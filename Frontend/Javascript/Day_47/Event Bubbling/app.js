//! Event Bubbling

let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click", () => {
  console.log("div was clicked");
});
ul.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("ul was clicked");
});

for (li of lis) {
  li.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("li was clicked");
  });
}

// Example 2

let nxt = document.querySelector(".nxt");
let user = document.querySelector("#user");
let pass = document.querySelector("#pass");

nxt.addEventListener("click", function () {
  console.log("div was clicked");
});
user.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("user was clicked");
});
pass.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("pass was clicked");
});
