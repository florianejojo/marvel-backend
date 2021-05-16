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

app.listen(process.env.PORT, () => {
    console.log("Server has started");
});
