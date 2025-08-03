

window.onload = function() {
  //write your code here
  let Pronombre= ["el", "la", "mi", "tu"]
  let Adjetivo = ["genial", "rápido", "loco", "brillante"]
  let Sustantivo =["perro", "sol", "código", "nube"]
  let Dominio = [".es",".com"]



  let boton = document.querySelector(".generar")
  let contenedor = document.getElementById("container_header")

  boton.onclick = function(){
    contenedor.innerHTML="";

    for(let i = 0;i < 10; i++){

      //Random
  let randomPronombre = Pronombre [Math.floor(Math.random()*Pronombre.length)]
  let randomAdjetivo = Adjetivo [Math.floor(Math.random()*Adjetivo.length)]
  let randomSustantivo = Sustantivo [Math.floor(Math.random()*Sustantivo.length)]
  let randomDominio = Dominio [Math.floor(Math.random()*Dominio.length)]


  let dominio = randomPronombre + randomAdjetivo + randomSustantivo + randomDominio;

  let parrafo = document.createElement("p");
  parrafo.textContent = dominio;
  contenedor.appendChild(parrafo);
  
    }
  }
};
