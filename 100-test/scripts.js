
// function logSelection(e) {
//     const log = document.getElementById('log');

//     const selection = e.target.value.substring(e.target.selectionStart, e.target.selectionEnd);
//     log.textContent = `A seleccionado el texto: ${selection}`;
//     }
    
// Llamas a los elementos del DOM
const log = document.getElementById('log');
const input = document.querySelector('input');


// Disparas el evento select
input.addEventListener('select', (e)=>{

    const selection = e.target.value.substring(e.target.selectionStart, e.target.selectionEnd);
    log.textContent = `A seleccionado el texto: ${selection}`;
    
});