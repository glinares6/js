
const pendingTasks=document.getElementById('pending-tasks')
const finishedtasks=document.getElementById('finished-tasks')

// setData->establece la información que queremos compartir
// getData-> establece la información que queremos obtener

pendingTasks.addEventListener('dragstart',e =>{
    // console.log(e.target);
   e.dataTransfer.setData('text/plain',e.target.id)
//    console.log(e.dataTransfer.getData('text'));

})

pendingTasks.addEventListener('drag',(e)=>{
    e.target.classList.add('active')
})

// este evento es obligatorio sino no funciona
// zona donde se va soltar el elemento
finishedtasks.addEventListener('dragover',(e)=>{
    e.preventDefault()
    // e.target.classList.remove('active')
})

finishedtasks.addEventListener('drop',(e)=>{
    e.preventDefault()
    const element =document.getElementById(e.dataTransfer.getData('text'))
    element.classList.remove('active')
    finishedtasks.appendChild(pendingTasks.removeChild(element))
})


// propuesta tomar la tarea final y devolverlo a tarea pendiente 


// cuando damos click al elemento
finishedtasks.addEventListener('dragstart', e=>{
    // se toma sus valores
    e.dataTransfer.setData('text/plain',e.target.id)
    // console.log(e.dataTransfer);
})

// cuando movemos el elemento seleccionado
finishedtasks.addEventListener('drag',(e)=>{
    // damos  efecto de color
    e.target.classList.add('active')
})

// se debe ubicar la zona de destino
pendingTasks.addEventListener('dragover',(e)=>{
    e.preventDefault()
})

// al soltar el elemento en la zona de destino
pendingTasks.addEventListener('drop',(e)=>{
    e.preventDefault()
    // donde se va posicionar el elemento transferido
    const element=document.getElementById(e.dataTransfer.getData('text'))
    // removemos la clase resaltada ak soltar en la tarea pendiente
    element.classList.remove('active')
    // añadimos el elemento a la tarea pendiente
    pendingTasks.appendChild(finishedtasks.removeChild(element))
})
