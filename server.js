const express = require("express");

// create express instance
const app = express();

// port
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log("server started at port: " + port);
});
