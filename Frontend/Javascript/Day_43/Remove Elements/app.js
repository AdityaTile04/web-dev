//! Remove Elements

//! 1.removeChild

// Example 1
let btn = document.querySelector(".box");

let button = document.createElement("button");
button.innerHTML = "Submit";
btn.append(button);

let rem = document.querySelector(".box");
rem.removeChild(button);

// Example 2
let img = document.querySelector(".images");

let addImg = document.querySelector("img");
addImg.src =
  "https://cdn.pixabay.com/photo/2023/02/24/07/40/spiderman-7810368_640.png";
img.append(addImg);

let removeImg = document.querySelector(".images");
removeImg.removeChild(addImg);

//! remove

// Example 1
let para = document.querySelector(".box");

let addPara = document.createElement("p");
addPara.innerHTML = "Hello, i'm spiderman";
para.append(addPara);

addPara.remove();

// Example 2
let head = document.querySelector("body");

let addHead = document.createElement("h2");
addHead.innerHTML = "Content";
head.append(addHead);

addHead.remove();