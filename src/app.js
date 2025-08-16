window.onload = function () {
  const Pronombre = ["el", "la", "mi", "tu"];
  const Adjetivo = ["genial", "rápido", "loco", "brillante"];
  const Sustantivo = ["perro", "sol", "código", "nube"];
  const Dominio = [".es", ".com"];

  const boton = document.querySelector(".generar");
  const contenedor = document.getElementById("container_header");

  const getRandom = arr => arr[Math.floor(Math.random() * arr.length)];

  boton.onclick = function () {
    contenedor.innerHTML = "";

    for (let i = 0; i < 10; i++) {
      const dominio = getRandom(Pronombre) + getRandom(Adjetivo) + getRandom(Sustantivo) + getRandom(Dominio);

      const parrafo = document.createElement("p");
      parrafo.textContent = dominio;
      contenedor.appendChild(parrafo);
    }
  };
};
