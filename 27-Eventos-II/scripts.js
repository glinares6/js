const form= document.getElementById('form')
const input=document.getElementById('input')
const button=document.getElementById('button')

// input.addEventListener('keyup',(e) =>{
//     // console.log(e.target)
//     console.log(e.key)
// })

// button.addEventListener('click',(e) =>{
//     console.log(e.key)
//     // redirigir a una url
//     // open('https://google.com');
// })


const gallery=document.getElementById('gallery')
// const items=[...gallery.querySelectorAll('.gallery__item')]

// console.log(items);

// // para agrupar en todos los selectores de clase del hijo
   
//     for(let ar of items){
//         ar.classList.add('white')

//     }
    

    // primera forma ------------------------------------------

    // gallery.addEventListener('click',(e) => {
    //     // es afectado por el elemento acrual
    //     e.target.classList.add('white')
    // console.dir(e.target.classList[1]);
    
    // if(e.target.classList[1]=='white'){
    //     e.target.classList.replace('white','red')  
        
    // }else if(e.target.classList[1]=='red'){ 
    //     e.target.classList.replace('red','white')  
    // }
    
    // console.dir(e.target.classList[1]);
    
    // })


// 2da forma  -------------------------------------------------------    

//     gallery.classList.add('white')
    
//     gallery.addEventListener('click',(e) => {
//     console.dir(e.target.classList[1]);

//     if(e.target.classList[1]=='white'){
//             e.target.classList.remove('white')
//           e.target.classList.add('red')  

//     }else if(e.target.classList[1]=='red'){
//         e.target.classList.remove('red')
//         e.target.classList.add('white')
        

//     }

    
//     console.dir(e.target.classList[1]);

// })

const link =document.getElementById('link')

link.addEventListener('click', (e) =>{
    e.preventDefault()
    // button.click()
})

form.addEventListener('submit',(e) =>{
//    e.preventDefault();
    console.log('el formulario se a enviado');
})

// forzar evento
// form.submit()


button.addEventListener('click', e=>{
    input.value='haz hecho click'
})


button.click()







