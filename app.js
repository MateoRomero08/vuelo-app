const express = require("express");
const path = require("path");
const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// Rutas
const authRoutes = require("./routes/auth");
app.use("/api", authRoutes);

const vuelosRoutes = require("./routes/vuelos");
app.use("/api/vuelos", vuelosRoutes);

const reservasRoutes = require("./routes/reservas");
app.use("/api/reservas", reservasRoutes);

const comprasRoutes = require("./routes/compras");
app.use("/api/compras", comprasRoutes);

// Carpeta pública
app.use(express.static(path.join(__dirname, "public")));

// Ruta inicial
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});


// Vercel gestionará el servidor automáticamente.
module.exports = app;
