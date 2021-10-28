// crea una clase libro   **
// la clase libro tendra titulo,autor,año y genero  **
// crea un metodo que devuelva toda la información del libro **
// pide 3 libros y guardalos en un array **
// los libros se introduciran al arrancar el programa pidiendo los datos por prompt **
// validar que los campos no se introduzcan vacios  **
// validar que el año sea un numero y que tenga 4 digitos **
// validar que el genero sea aventuras, terror y fantasias **
// crea un funcion que muestre todoslos libros  **
// crea una función que muestre los autores ordenados alfabeticamente **
// crea un función que pida un genero y muestre la información de los libros que pertenecen a ese genere usando el metodo que devuelve la información

let arr=[]

class Libro{
    constructor(titulo,autor,año,genero){
        this.titulo=titulo
        this.autor=autor
        this.año=año
        this.genero=genero
    }

    getGender(){
        return this.genero
    }
    getAutor(){
      return  this.autor
    }
    infoLibro(){
       return `El libro ${this.titulo} tiene el autor ${this.autor} del año ${this.año} y es del genero ${this.genero}`;
    }
}

    while(arr.length<3){

        const title=prompt('titulo del libro')
        const author=prompt('introduzca el autor')
        const year=prompt('introduzca el año')
        const gender=prompt('introzca el genero').toLowerCase()
        

        // validar la información
        if(title !='' && author !='' && year !='' && gender !='' && !isNaN(year) && year.length==4 && (gender=='aventuras' || gender=='terror' ||  gender=='fantasias')){
            
            arr.push(new Libro(title,author,year,gender)) 
            }
            
        }



        // funcion que muestra todos los libros
        
        showLibros = ()=>{
            // usando el arreglo
            console.log(arr);

        }

        showLibros()


        // funcion que muestre los autores alfabeticamente
        showAuthors = () =>{
             // recorriendo la clase
             let author1=[]
             for(let book of arr){
                 author1.push(book.getAutor())
             }
             console.log(author1.sort());
        }

        showAuthors()

        // crea funcion pida un genero y muestren la información de los libros que pertenecen a ese genero usando el metodo devuelve la información

        showGender = () =>{
            const  pedirGender=prompt('indique el genero')
            for(let gen of arr){
                if(gen.getGender()==pedirGender){
                console.log(gen.infoLibro());
            }
                }
        }

        showGender()