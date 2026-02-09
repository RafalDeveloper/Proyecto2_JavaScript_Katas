/* EJE]RCICIO 10 */
// Calcular un promedio es una tarea extremadamente común, así que prueba a implementar esa funcionalidad en la siguiente función.
const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {
  //cambio a numberlist2
  let suma = 0;
  for (let i = 0; i < numberList.length; i++) {
    suma += numberList[i];
  }
  return suma / numberList.length;
}

console.log("(Ejercicio 10)", average(numbers2));
