let numbers = [1,2,3,4,5];

// Arrays Propiedad 
    // arrays.length -> devuelve el numero de posiciones que contiene el array

    console.log(numbers.length);
    // Arrays Metodo
    // Arrays-isArrays(variable a igualar) -> devuelve true sila variable es un array.
    let number= 4;

console.log( Array.isArray(numbers));;

    // Eliminar un elemento
        // shift()->Elimina el primer elemento del array y devuelve ese elemento.
        // pop()->Elinina el ultimo elemento del array y devuelve ese array.

console.log(numbers);
let eliminarPrimero= numbers.shift();
console.log(numbers);
let eliminarUltimo=numbers.pop();
console.log(numbers);
console.log(eliminarPrimero);
console.log(eliminarUltimo);
    // añadir elementos
        // push(elemento1,elemento2,...) -> añade uno o más elementos al final del array y devuelve la nueva lingitud.
        // unshoft(elemento1,elemento2,...) -> añade uno o más elementos al contenido del array  y devuelve la misma longitud.


console.log(numbers);
let newlength=numbers.push(6);
console.log(numbers);
// console.log(newlength);

let newlength1= numbers.unshift(0);
console.log(numbers);

    // indexOf()-> Devuleve el primer indice del elemento que conindica con el valor especificado, 0 -1 si ninguno es encontrado

// console.log(numbers.indexOf(4));


// lastIndexOf()-> Devuelve el ultimo indice del elemento que coincida, con el valor especificado, 0 -1 si nunguno es encontrado

console.log(numbers);
console.log(numbers.lastIndexOf(3));

// reverse()-> Invierte el orden de los elementos del array

numbers.reverse();
console.log(numbers);

// join()-> devuelve un string con el separador que inidiquemos, por defecto son comas.


// console.log(numbers);
// let arrayString = numbers.join(' ');
// console.log(arrayString);
// console.log(numbers.join());

// splice(a,b,items)-> Cambia  el contendio de un array eliminando elementos existentes y/o agegando nuevos elementos. 
    // a -> indice de inciio 
    // b-> numero de elementos(opccional)
    // items-> elementos a añadir en el caso de añadan(opcional)

console.log(numbers);
// numbers.splice(3); //Elimina desde la posicion hasta el final 
// numbers.splice(1,2); //Elimina desde la posición hastael numero de valores que le indiquemos.
// numbers.splice(1,2,10,23,54); //Si b es un valor distintivo de 0 elimina el numero de valores que indiquemos en b y añade los  valores de items a partir de la posición a

numbers.splice(1,2,10,23,54); // Si b vale 0 añade los elemetos a partir de la posición a y no elimina ninguno.
console.log(numbers);


// slice()->Extrae elemetos de un array desde el indice a hasta el indice b. Si no exitste b lo hace desde a hasta el final.Si no existe a ni b hace una copia del original.



// let newNubers= numbers.slice();
// console.log(numbers);
// console.log(newNubers);

// let newNubers= numbers.slice(2);
// console.log(numbers);
// console.log(newNubers);

let newNubers= numbers.slice(2,4);
console.log(numbers);
console.log(newNubers);