// fetch API
// Proporciona una interfaz javascript para acceder y manipular partes del canal HTTP, como peticiones y respuestas 

// También provee un metodo global fetch() que proporciona una forma facil y logica  de ontener recursos de forma asincona por la red. 
// Esta basado en promesas por la cual tiene un resolve y un reject internos.
    // Response-> tiene varios metodos 
    // ArrayBuffer()=>Archivos binarios en bruto(mp3,pdf,jpg,etc).Se utiliza cuando se necesita utilizar del archivo
    // blob()-> Archivos binarios en bruto(mp3,pdf,jpg,etc).Se utiliza cuando no se necesita manipular el contenido y se va a trabajar con el archivo  directamente
    // clone()-> crea un clon de un objeto de respuestas,identifico todos los sentidos ,pero almacenando en una variable diferente
    // FormData()=>Se utiliza para leer los objetos formData
    // json()>convierte los archivos en un objeto de javascript
    // text()-> Se utiliza cuando queremos leer un archivo de texto .Siempre se codijica en UTF-8


const button=document.getElementById('button')

button.addEventListener('click',()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.ok ? Promise.resolve(res) : Promise.reject(res))

    .then(res=> res.json())
    .then(res =>{

            const list =document.getElementById('list')
            const fragment=document.createDocumentFragment()

            for(const userInfo of res){
                const listItem=document.createElement('LI')
                listItem.textContent=`${userInfo.id}  - ${userInfo.name}`
                fragment.appendChild(listItem)
            }
            list.appendChild(fragment)
    })
    .catch(res=> console.log(res))
}) 



// metodo XMLHttpRequest
        // const button = document.getElementById('button')
        // button.addEventListener('click',() =>{

        //     let xhr
        //     if(window.XMLHttpRequest) xhr= new XMLHttpRequest()
        //     else  xhr= new ActiveXObject("Microsoft.XMLHTTP")

        //     xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')
            
        //     xhr.addEventListener('load', (data) =>{
        //         const dataJSON=JSON.parse(data.target.response)
        //         const list = document.getElementById('list')
        //             for(const userInfo of dataJSON){
        //                 const listItem= document.createElement('LI')
        //                 listItem.textContent= `${userInfo.id} - ${userInfo.name}`
        //                 list.appendChild(listItem)
        //             }
        //     })

        //     xhr.send()
        // })
