//! Async Functions

async function printName() {
  return "Aditya"; // returns a promise
}

printName()
  .then(() => {
    console.log("promise was successful");
  })
  .catch(() => {
    console.log("promise was rejected");
  });

const demo = async () => {
  return "hello";
};

demo()
  .then((result) => {
    console.log(`promise was resolved : ${result}`);
  })
  .catch((err) => {
    console.log(`promise was rejected : ${err}`);
  });

h1 = document.querySelector("h1");

async function changeColor(color, delay) {
  setTimeout(() => {
    h1.style.color = color;
  }, delay);
}

changeColor("red", 1000)
  .then(() => {
    console.log("red color was apply");
    return changeColor("green", 2000);
  })
  .then(() => {
    console.log("green color apply");
    return changeColor("purple", 3000);
  })
  .then(() => {
    console.log("purple color apply");
    return changeColor("yellow", 4000);
  })
  .then(() => {
    console.log("yellow color was apply");
  })
  .catch((err) => {
    console.log(`color not found ${err}`);
  });
