// Spread aperation(Operador de extansión)
// Su sintaxtis es 

// const numbers=[-12,2,3,23,43,2,3]
// console.log(...numbers);


// añadir un array a una función-------------------------

// const addNumbers =(a,b,c) => {
//     console.log(a+b+c);
// }
// let numbersToAdd = [1,2,3]

// // addNumbers(1,2,3) //paso de parametros

// addNumbers(...numbersToAdd)


// añadir un array a otro array --------------------------

// let users = ['javier','david','rosa','juan','mercedes']

// let newUser = ['marta','jaime','laura']

// users.push(newUser[0],newUser[1],newUser[2])
// // users.push(...newUser)
// // users.splice(2,1,...newUser)
// console.log(users);

// copiar arrays -------------------------------------------
// let arr1=[1,2,3,4,5]
// let arr2= arr1 //opcional 
// let arr2= [arr1] //opcional 
// let arr2=[...arr1]
// console.log(arr2);


// Concatenar arrays ----------------------------------------
// let arr1=[1,2,3,4,5]
// let arr2=[6,7,8]

// // let arrConcat=arr1.concat(arr2)  //opcional
// let arrConcat=[...arr1,...arr2]
// console.log(arrConcat);


// Enviar un numero indefinido de argumentos a una función (parametros REST) ----------------------------------------------------------------

// const restParam = (...numbers) =>{
//     console.log(numbers);
// }
// restParam(1,2,3,4,5,6,7,8)


// libreria Math ----------------------------------------------

// const numbers=[-12,2,3,23,43,2,3]

// console.log(Math.max(...numbers));
// console.log(Math.min(...numbers));

// eliminar elementos duplicados -------------------------------

const numbers=[-12,2,3,23,43,2,3]

// console.log(new Set(numbers)); 
console.log([...new Set(numbers)]);