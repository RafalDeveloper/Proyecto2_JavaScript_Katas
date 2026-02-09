/* Calcular promedio mezclado: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.

Es un poco locura, pero podremos ejercitar nuestra lógica con este ejercicio.

Puedes usar este array para probar tu función: */

const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];

let total = 0;
function averageWord(list) {
  for (element of list) {
    if (typeof element === "number") {
      total += element;
    } else if (typeof element !== "number") {
      total += element.length;
    }
  }
  return total;
}

console.log(averageWord(mixedElements));
