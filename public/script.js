document.getElementById("form-encuesta").addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = Object.fromEntries(new FormData(e.target));

  const respuesta = await fetch("/enviar", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData)
  });

  const mensaje = document.getElementById("mensaje");
  if (respuesta.ok) {
    mensaje.textContent = "✅ ¡Encuesta enviada correctamente!";
    e.target.reset();
  } else {
    mensaje.textContent = "❌ Error al enviar los datos. Intenta nuevamente.";
  }
});
