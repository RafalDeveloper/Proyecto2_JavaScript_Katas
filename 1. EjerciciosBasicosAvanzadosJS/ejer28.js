/* EJERCICIO 28 */
// Dada una lista de álbumes de música, utiliza un bucle para sumar todas las duraciones solo de los álbumes de rock y luego imprime el total de estas duraciones por consola.

const albums = [
  { title: "Led Zeppelin IV", genre: "Rock", duration: 42.19 },
  { title: "The Dark Side of the Moon", genre: "Rock", duration: 42.49 },
  { title: "Back in Black", genre: "Rock", duration: 42.11 },
  { title: "Hotel California", genre: "Rock", duration: 43.08 },
  { title: "Abbey Road", genre: "Rock", duration: 47.23 },
  { title: "Thriller", genre: "Pop", duration: 42.19 },
  { title: "A Night at the Opera", genre: "Rock", duration: 43.08 },
  { title: "The Wall", genre: "Rock", duration: 81.0 },
  { title: "Born to Run", genre: "Rock", duration: 39.26 },
  { title: "The Joshua Tree", genre: "Rock", duration: 50.11 },
];

let rockTime = 0;
// Creo una variable con valor 0, ya que aun no ha sumado nada

for (const album of albums) {
  // Recorro la constante almbms y creo una constante (album) con cada vuelta
  if (album.genre === "Rock") {
    // Si album/genero es estrictamente igual a "Rock"...
    rockTime += album.duration;
    // SUmamamos la duracion de cada valor
  }
}

console.log("Total minutos de rock:", rockTime);


 //Asi lo hice al principio... pero no me salia del todo, hasta que gpt, me ayudo xD

let rockTime2 = 0

for (let i = 0; i < albums.length; i++) {
  if (albums[i].genre === "Rock") {
    rockTime2 += albums[i].duration;
  }
}

console.log("Otra forma de saber los minutos de rock:", rockTime2);
