let model;
let currentStream = null;

const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d", { willReadFrequently: true });
const resultado = document.getElementById('resultado');
const botonEscanear = document.getElementById('botonEscanear');

const labels = [
  "baterías - contenedor negro",
  "residuos biológicos - contenedor negro",
  "vidrio marrón - contenedor verde",
  "cartón - contenedor blanco",
  "ropa - contenedor negro",
  "vidrio verde - contenedor verde",
  "metal - contenedor blanco",
  "papel - contenedor blanco",
  "plástico - contenedor blanco",
  "zapatos - contenedor negro",
  "basura general - contenedor negro",
  "vidrio blanco - contenedor verde"
];

async function cargarModelo() {
  try {
    console.log("🔄 Cargando el modelo...");
    model = await tf.loadGraphModel('model/model.json');
    console.log("✅ Modelo cargado");
    botonEscanear.disabled = false;
  } catch (err) {
    console.error("❌ Error al cargar el modelo:", err);
    alert("No se pudo cargar el modelo. Asegúrate de estar usando un servidor local y que la ruta es correcta.");
  }
}

async function iniciarCamara() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
    currentStream = stream;

    video.style.display = "block";
    document.getElementById("placeholder").style.display = "none";

    console.log("📷 Cámara encendida");
  } catch (error) {
    console.error("❌ Error al acceder a la cámara:", error);
    alert("No se pudo acceder a la cámara.");
  }
}

function apagarCamara() {
  if (currentStream) {
    currentStream.getTracks().forEach(track => track.stop());
    video.srcObject = null;
    currentStream = null;

    video.style.display = "none";
    document.getElementById("placeholder").style.display = "block";

    console.log("🛑 Cámara apagada");
  }
}

function capturarYPredecir() {
  if (!model) {
    alert("⚠️ El modelo aún no ha sido cargado. Espera unos segundos.");
    return;
  }

  resultado.innerText = "Analizando...";

  // Dibujar la imagen del video al canvas
  ctx.drawImage(video, 0, 0, 224, 224); // Ajusta a 224x224


  // Capturar tensor RGB del canvas
  const rgbTensor = tf.browser.fromPixels(canvas); // [224, 224, 3]

  // Asegurarse que tiene el tamaño correcto para el modelo
  const input = rgbTensor.toFloat().expandDims(0).div(255.0); // [1,224,224,3]

  console.log("📐 Input shape:", input.shape);

  try {
    const prediction = model.predict(input);
    prediction.array().then(data => {
      const index = data[0].indexOf(Math.max(...data[0]));
      const prediccion = labels[index];

      resultado.innerText = "Resultado: " + prediccion;
      console.log("🔍 Residuo identificado como:", prediccion);
    });
  } catch (error) {
    console.error("❌ Error en la predicción:", error);
    resultado.innerText = "Error al predecir";
    alert("Hubo un problema al realizar la predicción.");
  }
}

// Asegurarse que todo esté listo antes de asignar eventos
document.addEventListener('DOMContentLoaded', () => {
  // Cargar modelo al inicio
  cargarModelo();

  // Asignar manejadores de eventos
  document.getElementById('botonEncender').addEventListener('click', iniciarCamara);
  document.getElementById('botonApagar').addEventListener('click', apagarCamara);
  document.getElementById('botonEscanear').addEventListener('click', capturarYPredecir);
});
