// Fetch APIf->  Archivos binarios en bruto(mp3,pdf,jpg,etc).Se utiliza cuando no se necesita manipular el contenido y se va a trabajar con el archivo  directamente

// blob->binary long object

const buttonImg=document.getElementById('button-img')
const buttonPDF=document.getElementById('button-pdf')

buttonImg.addEventListener('click',()=>{
    fetch('dog.jpg')
    .then(res =>res.blob())
    .then(img=>{
        // document.getElementById('img').src='dog.jpg'
        document.getElementById('img').src=URL.createObjectURL(img)
    })
})
buttonImg.addEventListener('click',()=>{
    fetch('demo.pdf')
    .then(res =>res.blob())
    .then(pdf=>{
        // document.getElementById('img').src='dog.jpg'
        document.getElementById('pdf').href=URL.createObjectURL(pdf)
    })
})