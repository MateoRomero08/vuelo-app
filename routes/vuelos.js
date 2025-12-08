const express = require("express");
const fs = require("fs");
const router = express.Router();

router.post("/", (req, res) => {
    const { origen, destino } = req.body;

    const vuelos = JSON.parse(fs.readFileSync("vuelos.json"));

    const resultado = vuelos.filter(v =>
        v.origen.toLowerCase() === origen.toLowerCase() &&
        v.destino.toLowerCase() === destino.toLowerCase()
    );

    res.json(resultado);
});

module.exports = router;
