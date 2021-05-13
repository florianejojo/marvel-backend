const express = require("express");
const router = express.Router();
const axios = require("axios").default;

router.get("/characters", async (req, res) => {
    const { limit, skip, name } = req.query;

    try {
        const response = await axios.get(
            `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}&skip=${skip}&limit=${limit}&name=${name}`
        );
        res.status(200).json(response.data);
    } catch (error) {
        res.status(400).json(error.message);
    }
});

module.exports = router;
