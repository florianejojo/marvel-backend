const express = require("express");
const router = express.Router();
const axios = require("axios").default;

router.get("/characters", async (req, res) => {
    let { limit, skip, name } = req.query;
    if (!limit) {
        limit = "";
    }
    if (!skip) {
        skip = "";
    }
    if (!name) {
        name = "";
    }

    const url = `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}&skip=${skip}&limit=${limit}&name=${name}`;

    try {
        const response = await axios.get(url);

        res.status(200).json(response.data);
    } catch (error) {
        res.status(400).json(error.message);
    }
});

module.exports = router;
