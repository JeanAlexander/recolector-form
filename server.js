import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// === Cambia esta URL por la de tu Google Apps Script ===
const GOOGLE_SHEET_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbypjxauXnTfKnfNvq3rEhN-umWQ0h5mBdZx5etdqBXmsNaTtGTT6t5BxFMrui44wgjF0w/exec";

app.post("/enviar", async (req, res) => {
  try {
    const data = req.body;

    // Reenviar a Google Sheets
    const response = await fetch(GOOGLE_SHEET_WEBAPP_URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    const text = await response.text();
    console.log("Datos enviados a Google Sheets:", data);

    res.status(200).send("✅ Respuesta enviada correctamente a Google Sheets");
  } catch (error) {
    console.error("Error al enviar datos:", error);
    res.status(500).send("❌ Error al enviar datos");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor funcionando en puerto ${PORT}`));
