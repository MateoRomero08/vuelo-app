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

const reservasRouter = require('./routes/reservas');
app.use('/api/reservas', reservasRouter);

const comprasRoutes = require("./routes/compras");
app.use("/api/compras", comprasRoutes);

// Carpeta pública
app.use(express.static(path.join(__dirname, "public")));

// Ruta inicial
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});


// Servidor (Render usa process.env.PORT)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});