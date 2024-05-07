//! Attribute Manipulation

//! 1.getAttribute
// Example 1
let img = document.querySelector("img");
img.getAttribute("id");
console.dir(img);

// Example 2
let src = document.querySelector("img");
src.getAttribute("src");
console.dir(src);

//! 2.setAttribute
// Example 1
let setImg = document.querySelector("img");
setImg.getAttribute("id");
setImg.setAttribute("id", "spidermanImg");
console.dir(setImg);

// Example 2
let setSrc = document.querySelector("img");
setSrc.getAttribute("src");
setSrc.setAttribute("src", "assets/creation_3.jpeg");
console.dir(setSrc);

// Example 3
let addclass = document.querySelector("h1");
addclass.setAttribute("class", "head");
console.dir(addclass);
