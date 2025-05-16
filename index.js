import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.set("view engine", "ejs");
let userName = "";
console.log("Serving static files from: ", __dirname + '/public');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/homepage.html");
});

app.get("/resources", (req, res) => {
  res.sendFile(__dirname + "/resources.html");
});

// app.set("view engine", "ejs");

app.post("/talk", (req, res) => {
  const userName = req.body.name;
  res.render("talk", { name: userName });
});

app.get("/talk", (req, res) => {
  res.sendFile(__dirname + "/talk.html");
});

app.post("/talk", (req, res) => {
  userName = req.body.name;
  res.redirect("/talk"); // Now this will send talk.html
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

