//? Ejercicio 8
//! Accederemos a los datos de una API pública de Game Of Thrones, queremos un select con todos los nombres de los personajes para que cuando un usuario seleccione un nombre salga su imagen en el medio de la página.

//! Para obtener los datos con los que jugar necesitaremos estudiar la documentación de la API y buscar la url necesaria para los datos que queramos, para este paso os pedimos que de verdad os esforcéis buscándola en la documentación, queremos la url que me traiga los datos de todos los personajes de GOT, sin embargo, en la slide siguiente tendréis la url directa de esos datos.

//! URL de la documentación (para que indaguéis): https://thronesapi.com/

//! Esta sería la URL final (la que deberéis utilizar para vuestra petición): https://thronesapi.com/api/v2/Characters

// Seleccionamos el elemento <select> del HTML por su id
const selectID = document.querySelector("#character-list");

// Seleccionamos el elemento <img> del HTML por su clase
const imgPersonaje = document.querySelector(".character-image");

// URL de la API
const urlApi = "https://thronesapi.com/api/v2/Characters";

// Array vacío donde guardaremos los personajes cuando lleguen de la API
let personajes = [];


// Hacemos la petición a la API
fetch(urlApi)
  // Convertimos la respuesta a JSON (llega como texto plano)
  .then((response) => response.json())
  // Cuando ya tenemos los datos procesados...
  .then((data) => {
    // Guardamos todos los personajes en la variable externa para usarla después
    personajes = data;
    // Recorremos cada personaje con su índice de posición
    data.forEach((element, index) => {
      // Creamos un elemento <option> en memoria
      const optionSelect = document.createElement("option");
      // Concatenamos nombre y apellido
      const nombreApellido = element.firstName + " " + element.lastName;
      // Guardamos el índice como valor de la opción (para luego encontrar al personaje)
      optionSelect.value = index;
      // El texto visible en el select es el nombre completo
      optionSelect.textContent = nombreApellido;
      // Añadimos la opción al <select> del HTML
      selectID.appendChild(optionSelect);
    });
  });

// Escuchamos cuando el usuario cambia la selección del <select>
selectID.addEventListener("change", () => {
  // Obtenemos el índice de la opción seleccionada
  const indice = selectID.value;
  // Buscamos ese personaje en el array y asignamos su imagen al <img>
  imgPersonaje.src = personajes[indice].imageUrl;
});
