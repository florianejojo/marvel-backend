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

// app.get("/comics/:id", async (req, res) => {

//     const { limit, skip, name } = req.fields;
//     console.log(limit, skip, name);

//     try {
//         const response = await axios.get(
//             `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}&skip=${skip}&limit=${limit}&name=${name}`
//         );
//         res.status(200).json(response.data);
//     } catch (error) {
//         res.status(400).json(error.message);
//     }
// });

// app.all("*", (req, res) => {
//     res.status(400).json({ message: "Page not found" });
// });

app.listen(3000, () => {
    console.log("Server has started");
});
