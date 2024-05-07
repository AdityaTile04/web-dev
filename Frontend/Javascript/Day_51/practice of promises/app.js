let head = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resloved, rejected) => {
    setTimeout(() => {
      head.style.color = color;
      resloved(`color was changed`);
    }, delay);
  });
}

changeColor("red", 1000)
  .then(() => {
    console.log(`apply red color`);
    return changeColor("green", 2000);
  })
  .then(() => {
    console.log(`apply green color`);
    return changeColor("purple", 3000);
  })
  .then(() => {
    console.log(`apply purple color`);
    return changeColor("aqua", 4000);
  })
  .then(() => {
    console.log(`apply aqua color`);
  })
  .catch(() => {
    console.log(`color was not apply`);
  });
