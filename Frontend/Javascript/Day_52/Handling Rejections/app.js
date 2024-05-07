//! Handling Rejectons

let head = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let random = Math.floor(Math.random() * 10) + 1;
      if (random > 6) {
        reject();
      }
      head.style.color = color;
      resolve(`color changed to ${color}`);
      console.log(color);
    }, delay);
  });
}

async function storeColor() {
  try {
    await changeColor("red", 1000);
    await changeColor("green", 1000);
    await changeColor("blue", 1000);
    await changeColor("orange", 1000);
  } catch (error) {
    console.log(error);
    console.log(`Error Caught`);
  }

  let name = "Aditya";
  console.log(`Name is ${name} Tile`);
}
