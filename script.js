const btn = document.getElementById("btn");
const text = document.getElementById("text");
const counter = document.getElementById("counter");

let progress = 0;

btn.addEventListener("click", () => {
  if (progress < 100) {
    progress += 10;
    counter.textContent = `Progreso: ${progress}%`;
  }

  if (progress === 100) {
    text.textContent = "Proyecto completado. Bloqueo superado.";
    btn.disabled = true;
  }
});
