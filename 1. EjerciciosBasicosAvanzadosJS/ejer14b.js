/* Ejercicio 14
Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.

Por ejemplo, que devuelva: code:4, repeat: 1, eat: 1,...

Podéis conformar el formato que queráis para la devolución del resultado siempre y cuando sea claro.

Puedes usar este array para probar tu función: */

const words = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
];
function repeatCounter(list) {
  const cuenta = [];
  for (word of list) {
    if (cuenta[word]) {
      cuenta[word]++;
    } else cuenta[word] = 1;
  }

  return cuenta;
}

console.log("El recuento de los elementos del siguiente array es:", repeatCounter(words));
