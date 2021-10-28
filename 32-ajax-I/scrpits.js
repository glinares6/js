// protocolo HTTP
// https://es.wikipedia.org/wiki/Protocolo_de_transferencia_de_archivos
// https://developer.mozilla.org/es/docs/Web/HTTP/Status

// API jsonplaceholder -> simplifica la forma de traer datos desde un servidor renoto
            // https://jsonplaceholder.typicode.com/

const button = document.getElementById('button')
button.addEventListener('click',() =>{

    // para verificar si cumple  en el navegador el ajax, se usa -> "XMLHttpRequest" in window
    let xhr
    if(window.XMLHttpRequest) xhr= new XMLHttpRequest()
    else  xhr= new ActiveXObject("Microsoft.XMLHTTP")

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')
    
    xhr.addEventListener('load', (data) =>{
        const dataJSON=JSON.parse(data.target.response)
        const list = document.getElementById('list')
            for(const userInfo of dataJSON){
                const listItem= document.createElement('LI')
                listItem.textContent= `${userInfo.id} - ${userInfo.name}`
                list.appendChild(listItem)
            }
    })

    xhr.send()
})

