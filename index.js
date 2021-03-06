const express = require("express");
const path = require("path");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set("view engine", "pug");
app.use(express.static("public"));

app.get("/", (req, res) => {
	res.render("index", { title: "Home" });
});

app.get("/entrar", (req, res) => {
	res.render("entrar", { title: "Login" });
});

app.get("/cadastrar", (req, res) => {
	res.render("cadastrar", { title: "Cadastrar" });
});

app.get("/consultar-sala", (req, res) => {
	res.render("consultar_sala", { title: "Consultar sala" });
});

app.get("/agendar", (req, res) => {
	res.render("agendar_sala", { title: "Agendar" });
});

app.get("/consultar-socio", (req, res) => {
	res.render("consultar_socio", { title: "Consultar sócio" });
});

app.listen(port, () => {
	console.log("Site escutando em http://REMOVED:${port}/");
});

app.post("/entrar", urlencodedParser, (req, res) => {
	console.log("tentando fazer login");
});
