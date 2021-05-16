const express = require("express");
const formidable = require("express-formidable");
require("dotenv").config();

const app = express();
app.use(formidable());

const cors = require("cors");
app.use(cors());

const charactersRoutes = require("./routes/characters");

app.use(charactersRoutes);

const comicsRoutes = require("./routes/comics");

app.use(comicsRoutes);

app.get("/", (req, res) => {
    res.status(200).json("Welcome to Floriane's server ! ");
});
app.all("*", (req, res) => {
    res.status(400).json("Bad gataway");
});

app.listen(process.env.PORT, () => {
    console.log("Server has started");
});
