//! API Request Using Async Await

let api = "https://catfact.ninja/fact";

try {
  async function getFacts() {
    let res = await fetch(api);
    let data = await res.json();
    console.log(data.fact);
  }
  getFacts();
} catch (err) {
  console.log(err);
}
