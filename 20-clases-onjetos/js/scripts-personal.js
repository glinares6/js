// crea una clase libro   **
// la clase libro tendra titulo,autor,año y genero  **
// crea un metodo que devuelva toda la información del libro **
// pide 3 libros y guardalos en un array **
// los libros se introduciran al arrancar el programa pidiendo los daros por prompt **
// validar que los campos no se introduzcan vacios 
// validar que el año sea un numero y que tenga 4 digitos
// validar que el genero sea aventuras, terror y fantasias
// crea un funcion que muestre todoslos libros  **
// crea una función que muestre los autores ordenados alfabeticamente **
// crea un función que pida un genero y muestre la información de los libros que pertenecen a ese genere usando el metodo que devuelve la información

let title,author,year,gen;
let contador=0;

let tomo1;

// let arrayT=[];
const arrayTitle=[];
const arrayAuthor=[];
const arrayYear=[];
const arrayGen=[];


const arrayGenero=[];

// const books=[];





class Libro {
    constructor(titulo,autor,año,genero){
        this.titulo=titulo
        this.autor=autor
        this.año=año
        this.genero=genero
    }
        
        info(){
          return  `EL libro se llama ${this.titulo},  tiene como autor  ${this.autor} , es del año  ${this.año} y su genero es ${this.genero}`;
        }
        
}





let cantidadLibros=parseInt(prompt('cuantos libros va solicitar'));

    do{
        // ingreso de datos
        title=prompt(`su ${contador+1} libro `);
        author=prompt(`el autor es`);
        year=prompt(`el año es`);
        gen=prompt(`el genero`)


    
        // for (let i = 0; i < cantidadLibros; i++) {
        //     for (let j = 0; j < 4; j++) {
        //         arrayTitle[i][j].push(title,author,year,gen)                
        //     }
            
        // }
       
        // arrayTitle.push(year) 
        
        
        
        
        // guardar libro en un array
        // arrayTitle.push(title)
        // arrayAuthor.push(author)
        // arrayYear.push(year)
        // arrayGen.push(gen)


        arrayTitle.push([[title],[author],[year],[gen]]);
        // arrayTitle.push([[title],[author],[year],[gen]]);
        // books.push(new Libro(title,author,year,gen))
        
        
        contador++;
        console.log(contador);
        
        // crea un metodo que devuelve toda la información de un libro
        tomo1 =new Libro(title,author,year,gen);
        console.log(tomo1.info());
        
        
    }while(contador <cantidadLibros)
    
//   -----------------------------------------------  
    // for(let mandado of books){
    //     console.log(mandado);
    // }
// ----------------------------------------------------

// se improme todos los datos
//     for (let i = 0; i < cantidadLibros; i++) {
//         for (let j =0; j < 4; j++) {
//             console.log('se imprimio',arrayTitle[i][j]);
            
//         }     
// }
    

    // crea una funcion para mostrar todos los libros
    const mostrarLibros = (param1) =>{
        
        for (let i = 0; i < cantidadLibros; i++) {
                // console.log('los libros son',param1[i][0]);

                arrayAuthor.push(param1[i][0])

                
            }
            console.log(`los libros son ${arrayAuthor.join(', ')} `);
            
}
    mostrarLibros(arrayTitle);



    // crea una función para mostrar todos los autores ordenados alfabeticamente
    const mostrarAutores = (param2) =>{


        for (let i = 0; i < cantidadLibros; i++) {
                console.log('los autores son',param2[i][1].sort());    
    }

        }

    mostrarAutores(arrayTitle);
        alert('se finalizo');


        console.log(arrayTitle);


    // crea un función que pida un genero y muestre la información de los libros que pertenecen a ese genere usando el metodo que devuelve la información


    let asignar = prompt('pida su genero')
    console.log(asignar);

    let pedirGenero = (param3) =>{


        for (let i = 0; i < cantidadLibros; i++) {
      
            if(param3 ==null){
                alert('a cancelado su busqueda');
            

            }else if(arrayTitle[i][3]==param3 &&  param3=='aventura'){
                
        for (let j =0; j < 4; j++) {
            console.log(`el libro  de aventura contiene`,arrayTitle[i][j]);
            
        }     



            }else if(arrayTitle[i][3]==param3 && param3=='terror'){

                for (let j =0; j < 4; j++) {
                    console.log(`el libro  de terror contiene`,arrayTitle[i][j]);
                    
                }     
                 

            }else if(arrayTitle[i][3]==param3 && param3=='fantasia'){

                for (let j =0; j < 4; j++) {
                    console.log(`el libro  de fantasia contiene`,arrayTitle[i][j]);
                    
                } 

            }else if(param3 !='aventura' && param3 !='terror' && param3 !='fantasia'){
                console.log(`su libro no coincide con los que esta en biblioteca por ser del genero ${param3}`);
            }

            
            
        }     



    }

    pedirGenero(asignar);
     

    




// console.log(tomo1.autor);


// guardar en un array

    // console.log(arrayTitle);
    // console.log(arrayAuthor);
    // console.log(arrayYear);
    // console.log(arrayGen);
    
    
//     creacion  de la funcion -no se ejevuta por si solo es necesario que lo invoquen


// function validar(params) {



// llamado de la funcion

// validar();





// -----------------------------------------------
// let numero, intentos=5;

// // let aleatorio=parseInt(Math.random()* 10)+1;
// let aleatorio=parseInt(Math.round(Math.random()*(10-1)+1))
// console.log('El numero elgido es', aleatorio);

// do{
//         numero=prompt(`ingresar numero, tienes ${intentos} intentos ` );

// }while(numero != aleatorio && intentos-->0 );

//     if (numero==aleatorio) {
//        alert(`El numero elegido es ${aleatorio}`);   
//     }else{
//         alert(`vuelve a intentarlo`);
//     }


// ------------------------------------------------

// ADIVINA EL NÚMERO --STACKOVERFLOW--

// let numeroAleatorio = parseInt(Math.random()* 10)+1;
// console.log("Número obtenido", numeroAleatorio);
// let num, intentos = 10;
// /* Saldremos del bucle si agotamos intentos o acertamos número */
// do {
//   num = prompt(
//     `Ingrese un número (quedan ${intentos} intentos):`
//   );
// } while(numeroAleatorio != num && --intentos > 0);
// /* Detectamos si salimos del bucle por agotar intentos o acertar número */
// if (numeroAleatorio == num){
//   alert("¡Ha acertado el número!");
// } else {
//   alert("No lo ha conseguido en 10 intentos, sigue intentando");
// }


