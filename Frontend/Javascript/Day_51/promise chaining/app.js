//! promise chaining

function savetoDB() {
  return new Promise((resolved, rejected) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolved(`success :  data was saved`);
    } else {
      rejected(`failure :  data was saved`);
    }
  });
}

//! promises
// promises are rejected and resolved with some data (valid result or errors)

savetoDB("Aditya")
  .then((result) => {
    console.log(`data1 was saved`);
    console.log(`result of promise ${result}`);
    return savetoDB("Hello");
  })
  .then((result) => {
    console.log(`data2 was saved`);
    console.log(`result of promise ${result}`);
    return savetoDB("Engineer");
  })
  .then((result) => {
    console.log(`data3 was saved`);
    console.log(`result of promise ${result}`);
  })
  .catch((error) => {
    console.log(`data was rejected`);
    console.log(`error of promise ${error}`);
  });
