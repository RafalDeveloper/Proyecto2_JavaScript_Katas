/* Ejercicio 29
Agrupa las películas de Star Wars por década de lanzamiento en un objeto donde las claves son las décadas y los valores son arrays de películas.

Utiliza bucles para lograrlo e imprime el objeto final por consola. */

const starWarsMovies = [
  { title: 'A New Hope', releaseYear: 1977 },
  { title: 'The Empire Strikes Back', releaseYear: 1980 },
  { title: 'Return of the Jedi', releaseYear: 1983 },
  { title: 'The Phantom Menace', releaseYear: 1999 },
  { title: 'Attack of the Clones', releaseYear: 2002 },
  { title: 'Revenge of the Sith', releaseYear: 2005 },
  { title: 'The Force Awakens', releaseYear: 2015 },
  { title: 'The Last Jedi', releaseYear: 2017 },
  { title: 'The Rise of Skywalker', releaseYear: 2019 },
  { title: 'Rogue One', releaseYear: 2016 },
  { title: 'Solo', releaseYear: 2018 }
];

// Me ha cistado muchio y lo tuve que sacar por IA

// Crear objeto para agrupar por décadas
const movie10 = {};

// Recorrer todas las películas con un bucle for...of
for (const movie of starWarsMovies) {
  
  // Calcular la década: dividir entre 10, quitar decimales y multiplicar por 10
  const decade = Math.floor(movie.releaseYear / 10) * 10;
  
  // Crear la clave de la década como string (ej: "1970s")
  const decadeKey = decade + 's';
  
  // Si la década no existe en el objeto, crear un array vacío
  if (!movie10[decadeKey]) {
    movie10[decadeKey] = [];
  }
  
  // Agregar la película al array de esa década
  movie10[decadeKey].push(movie.title);
}

console.log('Películas de Star Wars agrupadas por década:');
console.log(movie10);