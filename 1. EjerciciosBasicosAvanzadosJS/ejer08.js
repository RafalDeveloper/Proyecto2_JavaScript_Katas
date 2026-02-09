/* EJERCICIO 8 */
// Buscar la palabra más larga: Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(stringList) {
  let longestWord = "";
  for (const string of stringList) {
    if (string.length > longestWord.length) {
      longestWord = string;
    }
  }
  return longestWord;
}

console.log(findLongestWord(avengers));
