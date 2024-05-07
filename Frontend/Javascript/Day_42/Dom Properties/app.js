//! Dom Properties

//! 1.innerText
// Show the visible text contained in a node

let para = document.querySelector("p");
para.innerText = "Aditya";
console.dir(para);

//! 2.innerText
// Show all the full text

let para2 = document.querySelector("#description");
para2.innerText = "Hey, i am peter parker";
console.dir(para2);

//! 3.textContent
// Shows the full markup
let para3 = document.querySelector("h1");
para3.textContent = "Peter Parker";
console.dir(para3);
