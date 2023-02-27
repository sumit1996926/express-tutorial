const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json("./data.js");
});

app.listen(5000, () => {
  console.log("Server is listening on post 5000");
});
