//! Adding Elements

//! 1.appendChild

// Example 1
let newPara = document.createElement("p");
newPara.innerHTML = ", i'm spider man.";

let div = document.querySelector(".sec1");
div.appendChild(newPara);

let box = document.querySelector(".box");
box.appendChild(newPara);

// Example 2
let newImg = document.createElement("img");
newImg.src =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2m34Y2yDBOtbP6Pnp8Ku65P2A1yGYrx4a24NP0bkYCA&s";

let body = document.querySelector(".images");
body.appendChild(newImg);

// Example 3
let btn = document.createElement("button");
btn.innerText = "click me";

let box1 = document.querySelector(".box");
box1.appendChild(btn);

//! 2.append (add content last)

// Example 1
newPara.append("this is new text!");

// Exmple 2
btn.append("!");

//! 3.prepend (add content first)

// Example 1
newPara.prepend("Hello"); // add content first

//! 4.insertAdjacent
let p = document.querySelector("p");
let button = document.createElement("button");
button.innerText = "Submit";

p.insertAdjacentElement("beforebegin", button);
p.insertAdjacentElement("afterbegin", button);
p.insertAdjacentElement("beforeend", button);
p.insertAdjacentElement("afterend", button);

