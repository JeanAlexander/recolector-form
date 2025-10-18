const url = "https://script.google.com/macros/s/AKfycbz_PFtlBxVwqMFdFEbkTfxV8pWVcSyA3LQ3aWVdMQKhuvMkBTYm3The2TeHPFjGXP5nkg/exec";

document.getElementById("formEncuesta").addEventListener("submit", async (e) => {
  e.preventDefault();

  const datos = {
    nombre: document.getElementById("nombre").value,
    edad: document.getElementById("edad").value,
    pregunta1: document.querySelector('input[name="pregunta1"]:checked')?.value || "",
    pregunta2: document.querySelector('input[name="pregunta2"]:checked')?.value || "",
    pregunta3: document.querySelector('input[name="pregunta3"]:checked')?.value || "",
    pregunta4: document.getElementById("pregunta4").value,
    pregunta5: document.querySelector('input[name="pregunta5"]:checked')?.value || "",
    pregunta6: document.getElementById("pregunta6").value
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(datos)
    });

    if (res.ok) {
      alert("✅ Respuestas enviadas correctamente");
      e.target.reset();
    } else {
      alert("❌ Error al enviar los datos. Intenta nuevamente.");
    }
  } catch (error) {
    alert("⚠️ Error de conexión con el servidor.");
    console.error(error);
  }
});
