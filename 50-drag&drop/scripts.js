
// API drag&drop
    // Existen 2 partes principales en esta API ,el objeto a arrastrar y la zona donde vamos a dejarlo.

    // Para controlar varias acciones tenemos varios eventos de cada uno de las partes.
    // Objeto a arrastrar
        // dragstart -> se dispara al comenzar a arrastraar
        // drag -> se dispara mientraz arrastrmos
        // dragend -> se dispara cunado soltamos el objeto

    // Zona de destino
            // dragenter -> se dispara cuando el objeto entras en la zona de destiono
            // dragover -> se dispara cuando el objeto se nueve sobe la zpna de destino
            // drop -> se deispara cuando soltamos el objeto en la zona de destino
            // dragleave ->  se dispara cuando el onjeto sale de la zona de destino    

const smile=document.getElementById('smile')
const dropZone=document.getElementById('drop-zone')

// smile.addEventListener('dragstart',()=>{
//     console.log('drag start');
// })
// smile.addEventListener('dragend',()=>{
//     console.log('drag end');
// })
// smile.addEventListener('drag',()=>{
//     console.log('drag');
// })

dropZone.addEventListener('dragover',(e)=>{
    e.preventDefault()
    console.log('drag mover');
})
dropZone.addEventListener('dragleave',()=>{
    console.log('drop leave');
})
dropZone.addEventListener('drop',()=>{
    console.log('drop');
})

