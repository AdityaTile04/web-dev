//! getElementByTagName
// Returns the element an html collection an empty collection(if not found)

// Example 1
let para = document.getElementsByTagName("b");
para[0].innerHTML = "Aditya";
console.dir(para);

//Example 2
let tag = document.getElementsByTagName("h1");
tag[0].innerHTML = "Aditya";
console.dir(tag);

// Example 3
let tag2 = document.getElementsByTagName("h2");
tag2[0].innerHTML = "Info";
tag2[1].innerHTML = "Creation";
console.dir(tag2);
