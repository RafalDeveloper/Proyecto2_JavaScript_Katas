/* Ejercicio 22
Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas.

Recuerda no usar frutas duplicadas.
Finalmente, imprime el array resultante. */

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const noVegan = [];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

let cuentaFrutas = 0;

for (let i = 0; i < foodSchedule.length; i++) {  // recorro todo el ibjeto foodSchedule
  if (!foodSchedule[i].isVegan) { // compruebo que el valor de is vegan es NO (false)
    noVegan.push(foodSchedule[i].name); // agrego a la constante novegan el nombre del alimento que me ha dado el if de antes (novegano)

    foodSchedule[i] = {name: fruits[cuentaFrutas], isVegan: true }; // agregamos la fruta no vegana que almacenamos antes y sustituimos el valor de false por true

    cuentaFrutas++; // sumammos la fruta y volvemos a empezar
     
  }

}

console.log(noVegan)
console.log(foodSchedule)