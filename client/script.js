const axios = require("axios");

let root = document.getElementById("root");
let btn = document.getElementById("btn");

btn.addEventListener("click", async () => {
  try {
    let data = await axios.post("/graphql", JSON.stringify({
      query: `query  Test($v: String) {test(str: $v)}`,
      variables: { v: "what about me!!??" },
    }));
    console.log(data);

    root.innerHTML = data.data;
  } catch (err) {
    console.error(err);
  }
})