const btn = document.getElementById("btn");
const text = document.getElementById("text");
const counter = document.getElementById("counter");
const progressBar = document.getElementById("progress-bar");
const resetBtn = document.getElementById("reset");

// 1️⃣ Recuperar progreso primero
let progress = Number(localStorage.getItem("progress")) || 0;

// 2️⃣ Actualizar visual al cargar
counter.textContent = `Progreso: ${progress}%`;
progressBar.style.width = `${progress}%`;

if (progress === 100) {
  text.textContent = "Proyecto completado. Bloqueo superado.";
  btn.disabled = true;
}

// 3️⃣ Manejo del clic
btn.addEventListener("click", () => {
  if (progress < 100) {
    progress += 10;
    localStorage.setItem("progress", progress);
    counter.textContent = `Progreso: ${progress}%`;
    progressBar.style.width = `${progress}%`;
  }

  if (progress === 100) {
    text.textContent = "Proyecto completado. Bloqueo superado.";
    btn.disabled = true;
  }
});

resetBtn.addEventListener("click", () => {
  progress = 0;
  localStorage.removeItem("progress");
  counter.textContent = "Progreso: 0%";
  text.textContent = "Este es mi primer paso.";
  progressBar.style.width = "0%";
  btn.disabled = false;
});
