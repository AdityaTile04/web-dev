//! Callback hell

// Example of callback hell

let head = document.querySelector("h1");

function colorChange(color, delay, nextColorChange) {
  setTimeout(() => {
    head.style.color = color;
  }, delay);
  nextColorChange();
}

colorChange("red", 1000, () => {
  colorChange("green", 2000, () => {
    colorChange("blue", 3000, () => {
      colorChange("yellow", 4000, () => {
        colorChange("purple", 4000);
      });
    });
  });
});

let btn = document.querySelector("button");

function changeBtnColor(color, delay, colorChange) {
  setTimeout(() => {
    btn.style.backgroundColor = color;
    btn.style.color = "white";
  }, delay);

  colorChange();
}

changeBtnColor("red", 1000, () => {
  changeBtnColor("green", 2000, () => {
    changeBtnColor("blue", 3000);
  });
});

// this type code called callback nesting
// this callback nesting called callback hell
