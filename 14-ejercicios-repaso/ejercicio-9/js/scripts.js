// 9 - Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra.

let palabras=prompt('solicita un mero').toLowerCase();

// mostrar el numero de consonantes, vocales y la longitud de la pañabra 

console.log(palabras);


let contador=0;
let consonantes=0;

// for (let i = 0; i < palabras.length; i++) {
    

    
//     if (palabras[i].includes('a') || palabras[i].includes('e') || palabras[i].includes('i')  || palabras[i].includes('o') || palabras[i].includes('u')) {
//         //
//         contador++;
//         console.log(contador);
//     }else{
//         consonantes++;
//     }
    
// }
// console.log(`A  escrito ${contador} vocales y ${consonantes} consonantes y un total de ${palabras.length} palabras`);



for(let letra of palabras){
    if(letra =='a' || letra =='e' || letra=='i' || letra=='o' || letra=='u'){
        contador++;
    }else{
        if(letra.trim()){
            consonantes++;
        }
    }
}

// Use los métodos split() y join() para eliminar los espacios de una cadena en JavaScript
// console.log(palabras.split(" ").join(""));
let frases=palabras.replace(/ /g,"").length; 

let arr=palabras.trim().split(' ').length;


console.log(`Las palabras tienen ${contador} vocales y ${consonantes} consonantes  y tiene un total de  ${frases} letras` );

console.log(`La frase esta compuesta por ${arr} palabras`);


//  if(palabras==null){
//     console.log(`El campo esta vacio`);
// }else if (palabras.includes('a')) {
//     console.log(`A escrito la  letra a`);
//     contador++;
//     console.log(contador);
// }else if(palabras.includes('e')){
//     console.log(`A escrito la  letra e`);
//     contador++;
//     console.log(contador);
// }else if(palabras.includes('i')){
//     console.log(`A escrito la  letra i`);
//     contador++;
// }else if(palabras.includes('o')){
//     console.log(`A escrito la  letra o`);
//     contador++;
// }else if(palabras.includes('u')){
//     console.log(`A escrito la  letra u`);
//     contador++;
// }else{
//     console.log(`a escrito una consonante`)
// }

// console.log(`A  escrito ${contador} vocales`);
