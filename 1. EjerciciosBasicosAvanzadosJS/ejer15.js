/* EJERCICIO 15 */
/* Includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta".

Usa la función .includes de javascript. */

const products = [
  "Camiseta de Metallica",
  "Pantalón vaquero",
  "Gorra de beisbol",
  "Camiseta de Basket",
  "Cinturón de Orión",
  "AC/DC Camiseta",
];

console.log("Productos que incluyen 'Camiseta':");
products.forEach(product => {
  if (product.includes("Camiseta")) {
    console.log(product);
  }
});