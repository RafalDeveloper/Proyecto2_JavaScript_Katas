//Dado el siguiente array:

const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

//4.1 - Saca a "Tendo" por consola atacando su posición.

console.log("El ejerciico 4.1 es sacar 3a posicion): ", aldeanos[3]);

//4.2 - Coloca en el último lugar de este array a "Cervasio".

aldeanos.push("Cervasio");
console.log("El ejercicio 4.2 es añadir ultimo lugar cervasio: ", aldeanos);

//4.3 - Cambia el primer elemento de este array por "Bambina".

aldeanos.unshift("Bambina");
console.log("El ejercicio 4.3 es añadir primer elemento Babina: ", aldeanos);

//4.4 - Dale la vuelta a este array.

aldeanos.reverse();
console.log("El ejercicio 4.4 es dar la vuelta al array: ", aldeanos);

//4.5 - Cambia a "Narciso" por "Canela" haciendo uso de un método de array.

const cambioArray = aldeanos.map((elemento) =>
  elemento === "Narciso" ? "Canela" : elemento
);
console.log(
  "El ejercicio 4.5 es sustituir un elemmento del array por otro: ",
  cambioArray
);

//4.6 - Imprime por consola el último elemento de este array sin atacar a la posición explicitamente

console.log(
  "El ejercicio 4.6 es imrpimir el ultimo elemmento del array: ",
  aldeanos[aldeanos.length - 1]
);
// Pista: puedes usar el método length con algo más para ello.
