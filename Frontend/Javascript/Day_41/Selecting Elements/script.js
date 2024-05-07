//! getElementByClass
// Returns the element as an HTML collection or empty collection (if not found)

// Example 1
let img = document.getElementsByClassName("oldImg");

for (i = 0; i < img.length; i++) {
  img[i].src = "assets/spiderman_img.png";
  console.dir(`change value of img ${i} is changed.`);
}

// Example 2
let box = document.getElementsByClassName("boxLink");

for (i = 0; i < box.length; i++) {
  box[i].innerHTML = "hello";
  console.dir(`the value of ${i} will be changed.`);
}

// Example 3
