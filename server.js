const express = require("express");

// create express instance
const app = express();

// port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("server started at port: " + port);
});
