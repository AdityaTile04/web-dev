//! Peomises in JS

// The promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

let head = document.querySelector("h1");

function changeColor(color, delay, nextColor) {
  setTimeout(() => {
    head.style.color = color;
    nextColor();
  }, delay);
}

changeColor("red", 1000, () => {
  changeColor("green", 2000, () => {
    changeColor("blue", 3000, () => {
      changeColor("purple", 4000);
    });
  });
});

function savetoDB(data, success, failure) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1;

  if (internetSpeed > 4) {
    success();
  } else {
    failure();
  }
}

// callback hell
savetoDB(
  "Aditya",
  () => {
    console.log(`success : your data was saved`);
    savetoDB(
      "Hello World",
      () => {
        console.log(`success2: data was saved`);
      },
      () => {
        console.log(`failure2: data not saved`);
      }
    );
    savetoDB(
      "Engineer",
      () => {
        console.log(`success3: data was saved`);
      },
      () => {
        console.log(`failure3: data not saved`);
      }
    );
  },
  () => {
    console.log(`failure : Weak connection, data not saved`);
  }
);

//! Using Promise

function savetoDB() {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve(`Success: data was saved`);
    } else {
      reject(`Failure: data was not saved`);
    }
  });
}
