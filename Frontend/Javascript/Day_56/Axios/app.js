//! Axios
// Library to make HTTP request

let btn = document.querySelector("button");
let para = document.querySelector("p");

let api = "https://catfact.ninja/fact";

async function getFacts() {
  try {
    let res = await axios.get(api);
    console.log(res.data.fact);
    para.innerText = res.data.fact;
  } catch (err) {
    console.log(err);
  }
}

btn.addEventListener("click", getFacts);

let url = "https://dog.ceo/api/breeds/image/random";

let img = document.querySelector(".dogImg");
let newBtn = document.querySelector("#btn");

async function dogImg() {
  try {
    let res = await axios.get(url);
    console.log(res.data);
    img.src = res.data.message;
  } catch (err) {
    console.log(err);
  }
}

newBtn.addEventListener("click", dogImg);
