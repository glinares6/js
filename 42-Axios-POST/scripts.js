const button=document.getElementById('button')

// button.addEventListener('click',()=>{
//     const newPost= [{
//         title:'new post',
//         body:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, ad vel fugit minima, quidem cumque maiores optio consequatur quasi, dolorum rerum adipisci eaque deserunt. In quod facere corrupti porro officiis?',
//         userId:1
//     }]
//     fetch('https://jsonplaceholder.typicode.com/posts',{
//             method:'POST',
//             body: JSON.stringify(newPost),
//             headers:{
//                 "content-type":"application/json"
//             }
//     }).then(res=>res.json())
//     .then(json=>console.log(json))

// })


button.addEventListener('click',()=>{
    axios({
        method:'POST',
        url:'https://jsonplaceholder.typicode.com/post',
        data: {
            title:'A new post',
            bocy:'Lorem ipsun dolor sit amet consectetur adipisicing slit',
            userId:1
        }
    }).then(res=>console.log(res.data))
    .catch(err=>console.log(err))
})