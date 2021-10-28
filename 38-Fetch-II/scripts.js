// fetch API
    // Para hacer peticiones POST, fetch permite un segundo parametro
    // fetch(url,{
    //     method:'POST',
    //     body: Los datos que enviamos.Si es un objeto hay que convertirlo con JSONstringify(datos),
    //     header: {
    //         cabeceras de información sobre los que estamos enviando
    //         http://developer.mozila.org/es/docs/web/HTTP/Headers
    //     } 
    // })
    
    // console.log(newPost)
    // console.log(JSON.stringify(newPost));
const button =document.getElementById('button')

button.addEventListener('click',()=>{
    const newPost= [{
        title:'new post',
        body:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, ad vel fugit minima, quidem cumque maiores optio consequatur quasi, dolorum rerum adipisci eaque deserunt. In quod facere corrupti porro officiis?',
        userId:1
    }]
    fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'POST',
            body: JSON.stringify(newPost),
            headers:{
                "content-type":"application/json"
            }
    }).then(res=>res.json())
    .then(json=>console.log(json))

})