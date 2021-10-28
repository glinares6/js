const form=document.getElementById('form')

form.addEventListener('submit',e=>{
    e.preventDefault()
    sendData(form)
})

const sendData = (data) =>{
    let xhr 
    if (window.XMLHttpRequest) xhr=new XMLHttpRequest()
    else xhr =new ActiveXObject( "Microsoft.XMLHTTP")

    console.log(data);
    
    xhr.open('POST','marvel.php')
    const formData =new FormData(data)
    xhr.send(formData)
}

