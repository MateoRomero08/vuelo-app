const express = require("express");
const fs = require("fs");
const router = express.Router();

router.post("/", (req, res) => {
    const { usuario, idReserva, tarjeta } = req.body;

    const reservas = JSON.parse(fs.readFileSync("reservas.json"));
    const compras = JSON.parse(fs.readFileSync("compras.json"));

    const reserva = reservas[idReserva - 1];

    if (!reserva) {
        return res.json({ ok: false, mensaje: "La reserva no existe" });
    }

    if (reserva.usuario !== usuario) {
        return res.json({ ok: false, mensaje: "Esa reserva no pertenece a este usuario" });
    }

    compras.push({
        usuario,
        idReserva,
        tarjeta: "SIMULADO",
        fechaCompra: new Date().toISOString(),
        precio: reserva.precio
    });

    fs.writeFileSync("compras.json", JSON.stringify(compras, null, 2));

    res.json({
        ok: true,
        mensaje: "Compra realizada con éxito. Se envió confirmación a su correo (simulación)."
    });
});

module.exports = router;
