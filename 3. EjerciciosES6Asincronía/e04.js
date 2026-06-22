//? Ejercicio 4
//! 4.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean mayor que 18

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const mayor18 = ages.filter((age) => age > 18);

console.log("1️⃣");
console.log(mayor18);

//! 4.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par.

const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const agePar = ages2.filter((age) => age % 2 === 0);

console.log("2️⃣");
console.log(agePar);

//! 4.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of Legends'.

const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const streamerLOL = streamers.filter(
  (streamer) => streamer.gameMorePlayed === "League of Legends",
);

console.log("3️⃣");
console.log(streamerLOL);

//! 4.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos usar la funcion .includes() para la comprobación.

const streamers2 = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const streamerIncludesU = streamers2.filter((streamerU) =>
  streamerU.name.includes("u"),
);

console.log("4️⃣");
console.log(streamerIncludesU);

//! 4.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion .includes() para la comprobación. Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35.

const streamerCombi = streamers2
  .filter((streamer) => streamer.gameMorePlayed.includes("Legends"))
  .map((streamer) =>
    streamer.age > 35
      ? { ...streamer, gameMorePlayed: streamer.gameMorePlayed.toUpperCase() }
      : streamer,
  );

console.log("5️⃣");
console.log(streamerCombi);
