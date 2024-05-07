//! Assignment Questions

let body = document.querySelector("body");
let addInput = document.createElement("input");
let addBtn = document.createElement("button");

addBtn.innerText = "Click me!";

body.append(addInput);
body.append(addBtn);

addInput.setAttribute("placeholder", "Username");
addBtn.getAttribute("addBtn", "btn");

addBtn.setAttribute("id", "btn");

let btn = document.querySelector("#btn");
btn.style.backgroundColor = "blue";
btn.style.color = "white";

let head = document.createElement("h1");
head.innerHTML = "DOM Practice";
head.style.color = "purple";
head.style.textDecoration = "underline";

body.append(head);

let para = document.createElement("p");
para.innerHTML = "<b>Apna College Delta</b>";

body.append(para);
