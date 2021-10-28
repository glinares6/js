/* 
API FILE
    Esta API nos sirve para leer archvos que el usuario carga en la web .Se puede cargar archivos desde un  input de tipo file o desde el objeto dataTransfer de la API drag&drop
    
    La interfaz más utilizada para interactuar con ello es 
    fileReader
    https://developer.mozilla.org/es/docs/web/API/fileReader  

 */

const fileInput=document.getElementById('file')
const img=document.getElementById('img')
const text=document.getElementById('text')
const images=document.getElementById('images')

// leyendo archivos de texto
// fileInput.addEventListener('change',(e)=>{
//     const file=e.target.files[0]
//     const fileReader=new FileReader()

//     fileReader.readAsText(file)
//     fileReader.addEventListener('load',(e)=>{
//         // console.log(e.target.result);
//         text.textContent=e.target.result
//     })
// })

// carga de imagenes simple
// leyendo archivos de de imagen video etc
// fileInput.addEventListener('change',(e)=>{
//     const file=e.target.files[0]
//     const fileReader=new FileReader()

//     fileReader.readAsDataURL(file)
//     fileReader.addEventListener('load',(e)=>{
//         img.setAttribute('src',e.target.result)
//     })
// })

// carga multiple de imagenes

fileInput.addEventListener('change',(e)=>{
    const files=e.target.files

    
    const fragment=document.createDocumentFragment()

    for(const file of files){
        const img=document.createElement('IMG')
        const fileReader=new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.addEventListener('load',(e)=>{
            img.setAttribute('src',e.target.result)
        })
        fragment.appendChild(img)
    }
    images.appendChild(fragment)
})
