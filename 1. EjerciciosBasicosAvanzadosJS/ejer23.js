/* EJERCICIO 23 */
/*Usa un bucle para crear 3 arrays de películas filtrados por categorías.

Pelicula pequeña -> menos de 100 minutos, 
película mediana -> más de 100 minutos y menos de 200 y 
pelicula grande -> más de 200 minutos.

Imprime cada array por consola.*/

const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 80 },
  { name: "The Matrix", durationInMinutes: 136 },
  { name: "Amélie", durationInMinutes: 110 },
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];

const smallMovie = [];
const normalMovie = [];
const bigMovie = [];

for (let i = 0; i < movies.length; i++) {
  //Creamos una VARIABLE (i) que comienza en la posicion 0. Recorre toda la constante de movies (lenght) y suma una posicionn mas por cada las propiedades
  if (movies[i].durationInMinutes < 100) {
    // Si movies (i es para cada posisicon).duracion es inferior a 100...
    smallMovie.push(movies[i].name);
    // Hacemos un push a la constante smallMovies con cada variable que estableza la condicion (menor que 100)
  }
}

for (let i = 0; i < movies.length; i++) {
  if (movies[i].durationInMinutes > 100 && movies[i].durationInMinutes < 200) {
    normalMovie.push(movies[i].name);
  }
}

for (let i = 0; i < movies.length; i++) {
  if (movies[i].durationInMinutes > 200) {
    bigMovie.push(movies[i].name);
  }
}

console.log(smallMovie);
console.log(normalMovie);
console.log(bigMovie );

