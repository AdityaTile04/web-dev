//! Sending Headers With API Requests

const api = "https://icanhazdadjoke.com/";

async function jokes() {
  try {
    const headers = { headers: { Accept: "application/json" } };
    let res = await axios.get(api, headers);
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
}

async function getJokes() {
  try {
    const config = { headers: { Accept: "text/plain" } };
    const res = await axios.get(api, config);
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
}
