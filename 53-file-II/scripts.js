const fileInput=document.getElementById('file')
const progress=document.getElementById('progress')

// tomando un elemento contenedor
// fileInput.addEventListener('change',(e)=>{
//     const file=e.target.files[0]
//     const fileReader=new FileReader()
//     fileReader.readAsDataURL(file)


//     fileReader.addEventListener('progress',(e)=>{
//         // console.log(e.loaded * 100 / e.total);
//         progress.style.width=Number.parseInt(e.loaded * 100 / e.total ) +'%'
//     })
//     fileReader.addEventListener('loadend',(e)=>{
//         progress.style.width='100%'
//     })
// })

// usando un solo elemento
const root=document.documentElement
fileInput.addEventListener('change',(e)=>{
    const file=e.target.files[0]
    const fileReader=new FileReader()
    fileReader.readAsDataURL(file)


    fileReader.addEventListener('progress',(e)=>{
        root.style.setProperty('--bar-width',Number.parseInt(e.loaded * 100 / e.total ) +'%')
    })

    fileReader.addEventListener('loadend',(e)=>{
        root.style.setProperty('--bar-width','100%')
    })
})