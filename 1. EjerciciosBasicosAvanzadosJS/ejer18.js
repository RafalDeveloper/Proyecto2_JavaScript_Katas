/* EJERCICIO 18 */
/* Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y el id 40.

Imprime en un console log el array resultante.

Puedes usar este array: */

const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];
// Creamos un arrays vacio (noElimnados) donde ingresaremos 
// los elemtnos que cumplan la condicion
const noElimnados = [];

  for (let i=0; i < placesToTravel.length ; i++) {
    // "placesToTravel.length" define todo el array
    // Inicializmos el indice en 0 para recorrer el arrays desde 
    // la primera posicion y establecemos la condicion mientras 
    // i cumpla la condicion, avanzamos.
    // Establecemos una condicion IF en la cual si 
    // los ID son difretnes a 11 y 40 ...
    if (placesToTravel[i].id !==11 && placesToTravel[i].id !==40){
    // Entonces se agregara al array nuevo.
      noElimnados.push(placesToTravel[i])

    };
  }
  
console.log(noElimnados)
// Imprimirmos noEliminados porque son los que cumplen con la condicion de que no haya id 11/40
    // i++ es =  i + i se acumula y se suma al valor