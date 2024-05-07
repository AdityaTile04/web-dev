//! Await Keyword
// pauses the execution of its surrounding async function until the promise is settled (resolved or rejected)

function getNum() {
  return new Promise((resolved, rejected) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      console.log(num);
      resolved();
    }, 3000);
  });
}

async function getNewNum() {
  await getNum();
  await getNum();
  await getNum();
  await getNum();
}

let head = document.querySelector("h1");

async function changeColor(color, delay) {
  return new Promise((resolved, rejected) => {
    setTimeout(() => {
      head.style.color = color;
      resolved("color was changed");
    }, delay);
  });
}

changeColor("red", 1000)
  .then(() => {
    console.log(`red color apply`);
    return changeColor("blue", 2000);
  })
  .then(() => {
    console.log(`blue color apply`);
    return changeColor("green", 3000);
  })
  .then(() => {
    console.log(`green cloer apply`);
  });

//! Using Await Keyword

async function applyColor() {
  await changeColor("red", 1000);
  await changeColor("green", 1000);
  await changeColor("blue", 1000);
  await changeColor("purple", 1000);
}

// Example 2

function printName(name, delay) {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      console.log(name);
      resolve(`your Name is : ${name}`);
    }, delay);
  });
}

async function getName() {
  await printName("Aditya", 2000);
  await printName("kunal", 2000);
  await printName("Rushi", 2000);
  await printName("Gaurav", 2000);
}
