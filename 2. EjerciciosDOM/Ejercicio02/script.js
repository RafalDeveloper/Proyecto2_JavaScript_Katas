//! 2.1 Inserta dinamicamente en un html un div vacio con javascript.
const nuevoDiv = document.createElement("div")
const body = document.body

body.appendChild(nuevoDiv)


//! 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const nuevoDiv2 = document.createElement("div")
const nuevoP = document.createElement("p")

nuevoDiv2.appendChild(nuevoP)
body.appendChild(nuevoDiv2)


//! 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const nuevosDivs = document.createElement("div")

for (let i = 0; i < 6; i++){
    const nuevosPs = document.createElement("p")
    nuevosDivs.appendChild(nuevosPs)
}

body.appendChild(nuevosDivs)


//! 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const pSoy = document.createElement("p")
const textoP = document.createTextNode("Soy dinamico")

pSoy.appendChild(textoP)
body.appendChild(pSoy)


//! 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2clase = document.querySelector(".fn-insert-here")
const textoH2clase = document.createTextNode('Wubba Lubba dub dub')

h2clase.appendChild(textoH2clase)


//! 2.6 Basandote en el siguiente array crea una lista ul > li conlos textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul = document.createElement("ul")

for (const element of apps) {
    const li = document.createElement("li")
    const liTexto = document.createTextNode(element)
    li.appendChild(liTexto)
    ul.appendChild(li)
}

body.appendChild(ul)


//! 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const claseRemove = document.querySelectorAll(".fn-remove-me")

for (const element of claseRemove) {
    element.remove()
    
}


//! 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
const pMedio = document.createElement("p")
const pTextoMedio = document.createTextNode('Voy en medio')
pMedio.appendChild(pTextoMedio)

const divs = document.querySelectorAll("div")[1]
divs.before(pMedio)


//! 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const divsClase = document.querySelectorAll("div.fn-insert-here")

for (const element of divsClase) {
    const pDentro = document.createElement("p")
    pDentro.append('Voy dentro!')
    element.append(pDentro)
} 