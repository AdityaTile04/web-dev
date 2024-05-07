//! Keyboard Events

let inp = document.querySelector("input");

inp.addEventListener("keyup", function () {
  console.log("key was released");
});

inp.addEventListener("keydown", function () {
  console.log("key was pressed");
});

inp.addEventListener("keypress", function (event) {
  console.log(`code = ${event.code}`);
  console.log(`key = ${event.key}`);
});

inp.addEventListener("keydown", function (event) {
  console.log(`code = ${event.code}`);
  if (event.code == "ArrowUp") {
    console.log("Character run forward");
  } else if (event.code == "ArrowDown") {
    console.log("Character run backward");
  } else if (event.code == "ArrowRight") {
    console.log("Character runs right");
  } else if (event.code == "ArrowLeft") {
    console.log("Character runs left");
  }
});

inp.addEventListener("keydown", function (event) {
  console.log(`code = ${event.code}`);
  if (event.code == "KeyW") {
    console.log("Character run forward");
  } else if (event.code == "KeyS") {
    console.log("Character run backward");
  } else if (event.code == "KeyA") {
    console.log("Character runs right");
  } else if (event.code == "KeyD") {
    console.log("Character runs left");
  }
});
