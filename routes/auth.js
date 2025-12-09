const express = require("express");
const fs = require("fs");
const router = express.Router();

router.post("/registrar", (req, res) => {
    const { correo, password } = req.body;

    const usuarios = JSON.parse(fs.readFileSync("usuarios.json"));

    const existe = usuarios.find(u => u.correo === correo);
    if (existe) {
        return res.json({ ok: false, mensaje: "El correo ya está registrado" });
    }

    usuarios.push({ correo, password });

    fs.writeFileSync("usuarios.json", JSON.stringify(usuarios, null, 2));

    res.json({ ok: true, mensaje: "Usuario registrado con éxito" });
});

module.exports = router;


router.post("/login", (req, res) => {
    const { correo, password } = req.body;

    const usuarios = JSON.parse(fs.readFileSync("usuarios.json"));

    const usuario = usuarios.find(u => u.correo === correo && u.password === password);

    if (!usuario) {
        return res.json({ ok: false, mensaje: "Credenciales incorrectas" });
    }

    res.json({ ok: true, mensaje: "Ingreso exitoso" });
});
