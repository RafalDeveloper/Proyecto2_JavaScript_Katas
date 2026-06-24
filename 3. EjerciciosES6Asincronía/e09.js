//? Ejercicio 9
//! Ahora realizaremos una petición a la PokeAPI, queremos mostrar al entrar en la página la imagen de un Pokemon, la magia estará en que cada vez que recargues la página, será un nuevo Pokemon dentro de la primera generación de Pokemon, es decir, del 1 al 151. Los Pokemon no solo tienen una imagen, si no que tendrán muchas, hay que hallar la manera de encontrar la que más os guste.

//! Para ello el HTML será muy sencillo, y la URL esta vez os la aportaremos directamente, aunque os aconsejamos echarle un ojo a la documentación ya que es muy completa.

//! Documentación: https://pokeapi.co/

//! URL: https://pokeapi.co/api/v2/pokemon/1

//! Tened en cuenta que esta URL se refiere al pokemon número 1, que es bulbasaur, debemos hallar la manera de con una url similar ir consiguiendo pokemons aleatorios dentro de unos límites.

// Obtengo un numero aleatorio redondeado hacia arriba del 1 al 151 para usarlo de ID en la URL
let idPokemon = Math.ceil(Math.random() * 151);

// Selecciono nodo de imagen
const image = document.querySelector(".random-image");

// URL de API
const urlApi = "https://pokeapi.co/api/v2/pokemon/";

// URL API con el ID aleatorio
let urlRandom = urlApi + idPokemon;

// Hacemos la petición a la API
fetch(urlRandom)
  // Convertimos la respuesta a JSON (llega como texto plano)
  .then((response) => response.json())
  // Cuando ya tenemos los datos procesados...
  .then((data) => {
    // Accedo a la imagen oficial del Pokémon. Uso corchetes porque official-artwork contiene un guión que JavaScript interpretaría como resta si usara la notación de punto.
    const imgPokemon = data.sprites.other["official-artwork"].front_default;
    // Añado atributo src a img para poder acceder a la imagen de la API
    image.src = imgPokemon;
  });
