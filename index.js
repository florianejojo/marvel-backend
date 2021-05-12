const express = require("express");
const formidable = require("express-formidable");
const axios = require("axios").default;
require("dotenv").config();
// axios.<method> will now provide autocomplete and parameter typings

const app = express();
app.use(formidable());

const cors = require("cors");
app.use(cors());

app.post("/characters", async (req, res) => {
    // limit	--> between 1 and 100
    // skip	    --> number of results to ignore
    // name	    --> search a character by name

    // body à envoyer : {
    // limit: ,
    // skip: ,
    // name: ,
    // }

    const { limit, skip, name } = req.fields;
    console.log(limit, skip, name);

    try {
        const response = await axios.get(
            `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}&skip=${skip}&limit=${limit}&name=${name}`
        );
        res.status(200).json(response.data);
    } catch (error) {
        res.status(400).json(error.message);
    }
});

// app.get("/", (req, res) => {
//     res.json({ message: "" });
// });

app.listen(3000, () => {
    console.log("Server has started");
});
