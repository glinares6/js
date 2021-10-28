const button=document.getElementById('button')

// objeto.windows-> Es el onjero global , de que decienden todos los onjetos
    // alert()
    // pronpt()
    // confirm()

// window.alert('hola')
// addEventListener('click', (e)=>{
//     console.log(e);
// })

// let nombre= prompt('escriba su nombre')
// console.log(nombre);
// if (confirm('acepta')) {
//     console.log('el usuario acepto');
// }else{
//     console.log('El usuario en contra');
// }

// console.error('error')



// objeto console -> Es el onjeto que contine la consola del navegador
// console.log();
// console.dir()
// console.error()
// console.table()

const person= {
    name:'dorian',
    age:32,
    email:'dorian@gamil.com'
}

// console.table(person);

// onjeto location -> Es el onjeto que contiene la barra de direcciones
// https://developer.mozilla.org/es/docs/Web/API/Location
    // location.href
    // location.protocol
    // location.host
    // location.pathname
    // location.hash
    // location.reload()
        // length

    console.log(location.href);
    console.log(location.protocol)
    console.log(location.host)
    console.log(location.pathname)
    console.log(location.hash)
    // console.log(location.reload());

    // location.href='https://google.com'

// objero history
// https://developer.mozilla.org/es/docs/Web/API/History_API
    // back()
    // forward()
    // go(n|-n)

    // length

// onjeto date
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date
// https://www.w3schools.com/jsref/jsref_obj_date.asp

// const date= new Date()

// console.log(date);

// timers
    // Timeout()
    // Timeout: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout

    // setTimeout(()=>{code}, delay-in-miliseconds) -> hace que se ejecute la función desspues de delay.Si lo referenciamos mediante una variable constante, podemos pararlo con clearTimeout(referencia)

    // Interval: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval

    // setInterval(()=>{code}, delay-in-miliseconds) -> hace que se ejecute la funcion cada delay milisegundo.Si lo referenciamos mediante  una variable| constante podemos pararlo con clearInterval(referencia)


    // button.addEventListener('click',() =>{
    //     // setTimeout( saludar,3000)
    // const timeout=    setTimeout(()=>{
    //         console.log('adios');
    //     },3000)
    //     clearTimeout(timeout)
    // })
    

    // const timeout=    setTimeout(()=>{
    //     console.log('adios');
    // },3000)

    //     button.addEventListener('click',() =>{

    //     clearTimeout(timeout)
    // })


    
    const saludar = () =>{
        console.log('Hola');
    }
    
    let con=0
    // const interval =setInterval(saludar,3000)

const interval=  setInterval(() =>{
    console.log(con);
    con++;
},1000)

button.addEventListener('click',()=>{
    clearInterval(interval)
})
