// EJERCICIO 4
/* Dado el siguiente array:
const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];*/

// Ejercicio 4.1
// Saca a "Tendo" por consola atacando su posición.
const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];
const posicion = 1;
console.log("(Ejercicio 4.1)", aldeanos[3]);

// Ejercicio 4.2
// Coloca en el último lugar de este array a "Cervasio".
aldeanos.push("Cervasio");
console.log("(Ejercicio 4.2)", aldeanos);

// Ejercicio 4.3
// Cambia el primer elemento de este array por "Bambina".
aldeanos.shift();
aldeanos.unshift("Bambina");
console.log("(Ejercicio 4.3)", aldeanos);

// Ejercicio 4.4
// Dale la vuelta a este array.
aldeanos.reverse();
console.log("(Ejercicio 4.4)", aldeanos);

// Ejercicio 4.5
// Cambia a "Narciso" por "Canela" haciendo uso de un método de array.
const index = aldeanos.indexOf("Narciso");
if (index !== -1) {
  aldeanos.splice(index, 1, "Canela");
}
console.log("(Ejercicio 4.5)", aldeanos);

// Ejercicio 4.6
/* Imprime por consola el último elemento de este array sin atacar a la posición explicitamente
Pista: puedes usar el método length con algo más para ello.*/
console.log("(Ejercicio 4.6)", aldeanos.slice(-1)[0]);