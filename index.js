const express = require("express");
const app = express();
const path = require("path");

const porta = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.listen(porta, () => {
  console.log("Servidor funcionando na porta: " + porta);
});
