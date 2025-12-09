const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// GET /api/vuelos -> devuelve todos los vuelos
router.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, '../vuelos.json'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error leyendo vuelos' });
        }
        res.json(JSON.parse(data));
    });
});

module.exports = router;

