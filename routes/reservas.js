const express = require('express'); 
const router = express.Router();
const fs = require('fs');
const path = require('path');

const reservasFile = path.join(__dirname, '../reservas.json');

// Leer reservas
function leerReservas() {
    try {
        const data = fs.readFileSync(reservasFile, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        // Si el archivo no existe o está vacío, devolver array vacío
        return [];
    }
}

// Guardar reservas
function guardarReservas(reservas) {
    fs.writeFileSync(reservasFile, JSON.stringify(reservas, null, 2));
}

// Generar ID único
function generarId() {
    const reservas = leerReservas();
    return reservas.length > 0 ? reservas[reservas.length - 1].id + 1 : 1;
}

// GET /api/reservas/:usuario -> obtener reservas activas de un usuario
router.get('/:usuario', (req, res) => {
    const usuarioParam = req.params.usuario.toLowerCase();
    const reservas = leerReservas().filter(r => r.usuario.toLowerCase() === usuarioParam && r.estado === 'activa');
    res.json(reservas);
});

// POST /api/reservas -> agregar nueva reserva
router.post('/', (req, res) => {
    const { usuario, idVuelo, pasajeros } = req.body;

    if (!usuario || !idVuelo || !pasajeros) {
        return res.json({ mensaje: 'Datos incompletos' });
    }

    const nuevaId = generarId();

    // Puedes reemplazar precioVuelo con la info real desde /api/vuelos si quieres
    const precioVuelo = 100; 

    const nuevaReserva = {
        id: nuevaId,
        usuario: usuario.toLowerCase(),
        vueloId: parseInt(idVuelo),
        pasajeros: parseInt(pasajeros),
        fechaReserva: new Date().toISOString().split('T')[0],
        precio: precioVuelo,
        estado: 'activa'
    };

    const reservas = leerReservas();
    reservas.push(nuevaReserva);
    guardarReservas(reservas);

    res.json({ mensaje: `Reserva creada con éxito (ID: ${nuevaId})` });
});

// POST /api/reservas/cancelar -> cancelar reserva
router.post('/cancelar', (req, res) => {
    const { usuario, reservaId } = req.body;
    if (!usuario || !reservaId) return res.json({ mensaje: 'Datos incompletos' });

    const reservas = leerReservas();
    const reserva = reservas.find(r => r.id == reservaId && r.usuario.toLowerCase() === usuario.toLowerCase());

    if (!reserva) return res.status(404).json({ mensaje: 'Reserva no encontrada' });

    reserva.estado = 'cancelada';
    guardarReservas(reservas);

    res.json({ mensaje: 'Reserva cancelada correctamente' });
});

module.exports = router;
