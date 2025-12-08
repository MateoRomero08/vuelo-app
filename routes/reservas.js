const express = require("express");
const fs = require("fs");
const router = express.Router();

router.post("/", (req, res) => {
    const { usuario, idVuelo, fecha } = req.body;

    const reservas = JSON.parse(fs.readFileSync("reservas.json"));
    const vuelos = JSON.parse(fs.readFileSync("vuelos.json"));

    const vuelo = vuelos.find(v => v.id == idVuelo);

    if (!vuelo) {
        return res.json({ ok: false, mensaje: "El vuelo no existe." });
    }

    reservas.push({
        usuario,
        idVuelo: vuelo.id,
        fecha,
        precio: vuelo.precio
    });

    fs.writeFileSync("reservas.json", JSON.stringify(reservas, null, 2));

    res.json({ ok: true, mensaje: "Reserva realizada con éxito" });
});

module.exports = router;
