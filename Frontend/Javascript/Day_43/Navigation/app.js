//! Navigation

//! 1.parentElement

let para = document.querySelector("b");
console.log(para.parentElement);

let ul = document.querySelector("ul");
console.log(ul.parentElement);

let img = document.querySelector(".oldImg");
console.log(img.parentElement);

//! 2.children

let box = document.querySelector(".box");
console.log(box.children);

let image = document.querySelector(".images");
console.log(image.children);

let u = document.querySelector("ul");
console.log(u.children);

//! previousElementSibling / nextElementSibling

let img2 = document.querySelector(".oldImg");
console.log(img2.nextElementSibling);

let li = document.querySelector("li");
console.log(li.children);
console.log(li.nextElementSibling);
