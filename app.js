const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: false }));

app.get("*", (req, res) => {
  res.send("Hello!!! I'm on AWS");
});

app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});
