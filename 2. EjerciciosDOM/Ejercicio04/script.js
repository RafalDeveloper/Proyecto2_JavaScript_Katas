//! 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click
const butonClickConsole = document.querySelector("#btnToClick")

butonClickConsole.addEventListener ("click", (eventClick) =>{
    console.log(eventClick)
})


//! 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const inputFocus = document.querySelector(".focus")

inputFocus.addEventListener ("focus", (eventFocus) =>{
    console.log(eventFocus.target.value)
})

//! 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const inputInput = document.querySelector(".value")

inputInput.addEventListener ("input", (eventInput)=>{
    console.log(eventInput.target.value)
})