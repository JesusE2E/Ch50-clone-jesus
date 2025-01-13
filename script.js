

function solicitarYCambiarNombre (){
  const nombre = prompt("¿Cuál es tu nombre?");
  // uso de la api DOM para cambiar el texto de un elemento
  document.getElementById("texto-saludo").innerText = "Hola " + nombre;

}
