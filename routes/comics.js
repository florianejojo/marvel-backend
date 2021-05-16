const express = require("express");
const router = express.Router();
const axios = require("axios").default;

router.get("/comics/:charcacterId", async (req, res) => {
    const { charcacterId } = req.params;
    const url = `https://lereacteur-marvel-api.herokuapp.com/comics/${charcacterId}?apiKey=${process.env.API_KEY}`;

    try {
        const response = await axios.get(url);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(400).json(error.message);
    }
});

router.get("/comics", async (req, res) => {
    let { limit, skip, title } = req.query;
    if (!limit) {
        limit = "";
    }
    if (!skip) {
        skip = "";
    }
    if (!title) {
        title = "";
    }

    const url = `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY}&skip=${skip}&limit=${limit}&title=${title}`;
    console.log(url);
    try {
        const response = await axios.get(url);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(400).json(error.message);
    }
});

module.exports = router;
