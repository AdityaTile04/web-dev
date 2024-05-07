//! then and catch in promises

function savetoDB() {
  return new Promise((relosved, rejected) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      relosved(`Success : data was saved`);
    } else {
      rejected(`Failure : data was not saved`);
    }
  });
}

savetoDB("Hello World")
  .then(() => {
    console.log(`data was resolved`);
  })
  .catch(() => {
    console.log(`data was rejected`);
  });
