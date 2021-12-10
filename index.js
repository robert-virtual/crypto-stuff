const express = require("express");
const auth = require("./routes/auth");

const app = express();

app.set("port", 3000);

app.use(auth);

app.listen(app.get("port"), () => {
  console.log(`runing on port: ${app.get("port")}`);
});

console.log("hola node js");
