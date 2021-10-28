// 7 - Crea 3 arrays. El primero tendra 5 números y el segundo se llamará pares y el tercero impares, ambos estarán vacíos. Después multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10, si el resultado es par guarda ese número en el array de pares y si es impar en el array de impares. Muestra por consola: -la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6 -el array de pares e impares

// declaramos 3 arrays
let numbers=[3,5,9,11,17];
let pares=[];
let impares=[];
    console.log('Los numeros elegidos');
    console.log(numbers);
// console.log('El array par inicial es \n');
// console.log(pares);
// console.log('El array impar inicial es \n');
// console.log(impares);
// numero del 1 al 10

// for (let i = 0; i < numbers.length; i++) {
    
//     const element = parseInt(numbers[i]);
//     let aleatorio =Math.round(Math.random()*(10-1)+1);
    
//             console.log(`El numero impreso es ${element*aleatorio} y es producto de multiplicar ${element} * ${aleatorio}`);

//             let resultado= element*aleatorio;
//             // console.log(`Los resultados son ${resultado}`);

            
//             if(resultado % 2==0){
//                 // console.log(`Los numeros pares son ${resultado}`);
//             pares.push(resultado);
//                 // console.log(`La cadena de pares son ${pares}`);
//             }else{
//             impares.push(resultado);
//                 // console.log(`La cadena de impares son ${impares}`);
//                 // console.log(`Los numeros impares son ${resultado}`);
//             }


            
//         }
        
//         console.log(`El array par es \n`);
//         // console.log(`El array par es \n`+pares.join(','));
//         console.log(pares);
//         console.log(`El array impar es \n`);
//         // console.log(`El array impar es \n`+impares.join(','));
//         console.log(impares);


        for(let arr of numbers){
            let aleatorio =Math.round(Math.random()*(10-1)+1);
            
            let resultado= arr*aleatorio;
            console.log(`El numero impreso es ${arr*aleatorio} y es producto de multiplicar ${arr} * ${aleatorio}`);
            
            // console.log(`Los resultados son ${resultado}`);

            
            if(resultado % 2==0){
                // console.log(`Los numeros pares son ${resultado}`);
            pares.push(resultado);
                // console.log(`La cadena de pares son ${pares}`);
            }else{
            impares.push(resultado);
                // console.log(`La cadena de impares son ${impares}`);
                // console.log(`Los numeros impares son ${resultado}`);
            }

        }
        console.log(`El array par es \n`);
        // console.log(`El array par es \n`+pares.join(','));
        console.log(pares);
        console.log(`El array impar es \n`);
        // console.log(`El array impar es \n`+impares.join(','));
        console.log(impares);






