//! Query Selectors
// Allow us to use any css selectors

let tag = document.querySelector("h1"); // tag
console.dir(tag);

let id = document.querySelector("#description"); // id
console.dir(id);

let Sclass = document.querySelector(".oldImg"); // class
console.dir(Sclass);

let multiple = document.querySelector("div img"); // to select multiple tags
console.dir(multiple);

let all = document.querySelectorAll("a"); // to select all
console.dir(all);
