//! 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];
const ulCountries = document.createElement("ul");

for (const element of countries) {
  const liCountrie = document.createElement("li");
  liCountrie.textContent = element;
  ulCountries.appendChild(liCountrie);
}

document.body.appendChild(ulCountries);

//! 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const claseRemove = document.querySelector(".fn-remove-me");
claseRemove.remove();

//! 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];
const divDataFunction = document.querySelector(
  'div[data-function="printHere"]',
);
const ulCars = document.createElement("ul");

for (const element of cars) {
  const liCar = document.createElement("li");
  liCar.textContent = element;
  ulCars.appendChild(liCar);
}

divDataFunction.appendChild(ulCars);

//! 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

//? h4(title) + img(Url) -> divs

for (const element of countries2) {
  const divCountries2 = document.createElement("div"); // Creamos cada uno de los DIVS
  const h4Title = document.createElement("h4"); // Creamos los H4
  const imgUrl = document.createElement("img"); // Creamos los IMG

  //todo añadir atributos de h4 e img accediendo al indice atributo del objeto del array
  h4Title.textContent = element.title;
  imgUrl.src = element.imgUrl;

  //todo insertar img y h4 a div
  divCountries2.appendChild(h4Title);
  divCountries2.appendChild(imgUrl);

  //todo insertar divs a body
  document.body.appendChild(divCountries2);
}

//! 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
const button = document.createElement("button");
button.textContent = "Eliminar último div"; //agregamos texto para que tenga tamaño el boton

button.addEventListener("click", () => {
  const divs = document.querySelectorAll("div"); // Seleccionamos todos los divs
  if (divs.length > 0) { // Tiene que haber mas de 0 divs para elimnarlo
    const ultimoIndice = divs.length - 1; // Constante para acceder al ultimo indice de los divs
    const ultimoDiv = divs[ultimoIndice]; // y del NodeList de divs creado, eliminamos ultimo(-1)
    ultimoDiv.remove();
  }
});

document.body.appendChild(button);

//! 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
const divsRemove = document.querySelectorAll("div")

for (const element of divsRemove) {
    const buttonRemoveDiv = document.createElement("button")
    buttonRemoveDiv.textContent = "Eliminar este div"

    buttonRemoveDiv.addEventListener("click", () =>{
        element.remove()
    })
    
    element.appendChild(buttonRemoveDiv)
}
