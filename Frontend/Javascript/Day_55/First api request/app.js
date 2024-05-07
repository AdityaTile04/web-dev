//! API Request

let api = "https://catfact.ninja/fact";

fetch(api)
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    console.log(data.fact);
  })
  .catch((err) => {
    console.log(err);
  });
