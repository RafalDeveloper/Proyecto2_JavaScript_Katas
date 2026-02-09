/* Ejercicio 35
Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no.

Considera el caso de múltiples mutantes con el mismo poder. */

const mutants = [
  { name: "Wolverine", power: "regeneration" },
  { name: "Magneto", power: "magnetism" },
  { name: "Professor X", power: "telepathy" },
  { name: "Jean Grey", power: "telepathy" },
  { name: "Rogue", power: "power absorption" },
  { name: "Storm", power: "weather manipulation" },
  { name: "Mystique", power: "shape-shifting" },
  { name: "Beast", power: "superhuman strength" },
  { name: "Colossus", power: "steel skin" },
  { name: "Nightcrawler", power: "teleportation" },
];

function findMutantByPower(mutants, power) {
  const mutantNames = [];

  for (const mutant of mutants) {
    if (mutant.power === power) {
      mutantNames.push(mutant.name);
    }
  }

  if (mutantNames.length > 0) {
    return `El o los mutantes con ese poder son: ${mutantNames.join(", ")}`;
  } else {
    return `No se encontró ningún mutante con ese poder`;
  }
}

console.log(findMutantByPower(mutants, "telepathy"));
console.log(findMutantByPower(mutants, "magnetism"));
