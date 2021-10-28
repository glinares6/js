//como se abra

// web storange
    // los dos mecanismos en el almacenamiento web son los siguientes:
    
    //sessionStorange:mantiene un area de mantenimiento separado para cada origen que este disponible mientras dure la sesion de la pagina (mientras el naegador este abierto , incluyendo recargas de pagina y restablecimientos) .

    // local storange: Hace lo mismo pero persiste,incluso cuando el navegador se cierre  y se reabra.

//Ambos funcionan con clave valor  y tiemen dos metodos fundamentales 
    // setItem()-> para asigmanr una clave valor  y getItem()->que revibe como parametro la clave de la que quiesieramos ontener el valor

const form=document.getElementById('form')
const keys=document.getElementById('keys')

form.addEventListener('submit',(e) =>{
    e.preventDefault()

    // const person={
    //     name:'Doria',
    //     email:'dorian@gamil.com'
    // }
    // sessionStorage.setItem(`name`,JSON.stringify(person))


    // añadiendo información al locla storange de los imputs
    localStorage.setItem(form.keys.value,form.value.value)

    keys.innerHTML +=`<option>${form.key.value}</option>`

    // resetear el formulario
    form.reset()
})
    
    keys.addEventListener('change',()=>{
        document.getElementById('infoValue').textContent=  localStorage.getItem(keys[keys.selectedIndex].textContent)
    })

    
    // localStorage.clear()  
    localStorage.removeItem('assss')

    let vocal="amigo"
    console.log(vocal);

