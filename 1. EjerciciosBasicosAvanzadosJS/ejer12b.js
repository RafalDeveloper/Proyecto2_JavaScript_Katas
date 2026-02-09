/* Ejercicio 12
Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados.

Pista: puedes generar un nuevo array y devolverlo.

Puedes usar este array para probar tu función: */

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];


function removeDuplicates(list) {
    const noRep = []
    for (const element of list){
        if (!noRep.includes(element)){
             noRep.push(element)
        }
           
    }
    return noRep
}



console.log(removeDuplicates(duplicates))


// AYUDA IA. METODO MAS MODERNO y FACIL:
//  const resultado = [...new Set(lista)];
/* ¿Qué hace cada parte?

new Set(lista) = "Caja mágica, toma todas estas frutas pero quédate solo con una de cada tipo"

Resultado: Set {manzana, pera, plátano}


... = "Saca todas las frutas de la caja mágica y ponlas en una caja normal"

Resultado: [manzana, pera, plátano] */