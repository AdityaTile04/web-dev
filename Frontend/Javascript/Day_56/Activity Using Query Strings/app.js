//! Activity Using Query Strings

const api = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let inp = document.querySelector("input").value;
  let col = await getColleges(inp);
  showCol(col);
});

function showCol(col) {
  let list = document.querySelector("#list");
  list.innerText = "";
  for (coll of col) {
    console.log(coll.name);
    let li = document.createElement("li");
    li.innerText = coll.name;
    list.appendChild(li);
  }
}

async function getColleges(inp) {
  try {
    let res = await axios.get(api + inp);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}
