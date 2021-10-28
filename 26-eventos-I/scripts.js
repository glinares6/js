// Eventos de raton

// click->cuando pulsamos el boton isquierdo del raton
// dblclick->cuando pulsamos 2 veces seguidas el boton isquierdo del raton
// mouseenter->cuando entramos en la zona que tiene el evento
// mouseleave->cuando salimos de la zona que tiene el evento
// mousedown->cuando pulsamos y no soltamos el boton isquierdo del raton
// mouseup->cuando soltamos el boton isquierdo del raton
// mousemove->cuando movemos el raton

// Eventos del teclado
    // leydown->cuando pulsamos una tecla
    // leyup->cuando soltamos una tecla
    // keypress->cuando pulsamos una tecla y no la soltamos



const button = document.getElementById('button')
const box= document.getElementById('box')
const input=document.getElementById('input')
// button.addEventListener('click',() =>{
//     console.log('aquí click');
// })

// button.addEventListener('dblclick',() =>{
//     console.log('doble click');
// })


// box.addEventListener('mouseenter',()=>{
//     // forma en la que no se debe cambiar los estilos del css por js
//     // box.style.background='green'
//     // box.classList.add('green')
//     box.classList.replace('red','green')
// })

// box.addEventListener('mouseleave',() =>{
//     // forma en la que no se debe cambiar los estilos del css por js
//     // box.style.background='red'
//     box.classList.replace('green','red')
    
// })


// box.addEventListener('mousedown',() =>{
//     console.log('haz pulsado el boton de la caja');
// })
// box.addEventListener('mouseup',() =>{
//     console.log('haz soltado en boton isquierdo de la caja');
// })

// box.addEventListener('mousemove',()=>{
//     console.log('estas moviendo el cursos del raton en la caja');
// })




input.addEventListener('keydown',() =>{
    console.log('haz pulsado una tecla');
})
input.addEventListener('keyup',() =>{
    console.log('haz soltado  una tecla');
})
input.addEventListener('keypress',() =>{
    console.log('hazmantenido pulsado una tecla');
})
