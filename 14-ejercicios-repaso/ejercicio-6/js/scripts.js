// 6 - Escribe un programa que permita ir introduciendo una serie indeterminadade números mientras su suma no supere 50. Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos números se han introducido


// introducir una cantidad indeterminada de numeros
let inicial=0;
contador=0;
do{
        let number=parseInt(prompt('Introdusca el número'));
        if(inicial<=50){
            inicial=inicial+number;
            console.log(`el numero acumulado es ${inicial} y su limite es de 50`);
            contador++;
        }
    }while(inicial<=50)
    console.log(`Se a introducido la cantidad de ${contador}`);