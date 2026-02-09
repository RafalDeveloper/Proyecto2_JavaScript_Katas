/* EJERCICIO 22 */
/*Usa un for para remplazar todas las comidas
que no sean veganas con las frutas del array de frutas.

Recuerda no usar frutas duplicadas.

Finalmente, imprime el array resultante.*/

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const noVegan = []

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

let contadorFrutas = 0; // contador para saber qué fruta toca

for (let i = 0; i < foodSchedule.length; i++) { // recorro todo el menú
  if (!foodSchedule[i].isVegan) {  // si no es vegano
    noVegan.push(foodSchedule[i].name); // lo guardo en la lista de no veganos
    
    // lo sustituyo por una fruta
    foodSchedule[i] = { name: fruits[contadorFrutas], isVegan: true};

    contadorFrutas++; // paso a la siguiente fruta
  }
}
console.log(noVegan);        // ["Salmon", "Burger"]
console.log(foodSchedule);
