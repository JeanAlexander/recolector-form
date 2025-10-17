// server.js
import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint que recibe los datos
app.post("/api/form", (req, res) => {
  const { nombre, correo, mensaje } = req.body;
  console.log("Datos recibidos:", nombre, correo, mensaje);

  // Guarda los datos en un archivo local
  const linea = `${nombre}, ${correo}, ${mensaje}\n`;
  fs.appendFileSync("datos.txt", linea);

  res.json({ ok: true, mensaje: "Datos guardados correctamente ✅" });
});

// Servir el frontend
app.use(express.static("public"));

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
