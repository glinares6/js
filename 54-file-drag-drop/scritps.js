const fileInput=document.getElementById('file')
const dropZone=document.getElementById('drop-zone')

// zona donde se cargara los archivos
dropZone.addEventListener('click',()=>fileInput.click())

// al mover en el dropzone se oscurece(sino no sale)
dropZone.addEventListener('dragover',(e)=>{
    e.preventDefault()
    dropZone.classList.add('drop-zone--active')
})
// cuando sale fuera de la zona de archivos
dropZone.addEventListener('dragleave',(e)=>{
    e.preventDefault()
    dropZone.classList.remove('drop-zone--active')
})
// cuando suelta el mouse
dropZone.addEventListener('drop',(e)=>{
    e.preventDefault()
    dropZone.classList.remove('drop-zone--active')
    fileInput.files =e.dataTransfer.files
    console.log(fileInput.files);
     
})

// cuando hacemos algun cambio al file
fileInput.addEventListener('change',(e)=>{
    console.log(fileInput.files);
})