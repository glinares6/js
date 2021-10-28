// // 8 - Dado un array de letras, solicita un número de DNI y calcula que letra le corresponde. El número no puede ser negativo ni tener más de 8 dígitos. La posición de la letra es el resultado del módulo del número introducido entre 23

// // const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];


// array de letras
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];


// solicitar numero de DNI

    let dni=(prompt('Introdusxa su DNI'));
    //    let ah='lalocura';
    //    console.log(dni.split(''));
    // let digitos=dni.split('');
        let signo=Math.sign(dni);
        // console.log(digitos.length);
    if(signo==1){
        if(dni.length<8){
            // console.log('el digito ingresado es'+digitos.length);
            console.log(`El DNI debe contener 8 digitos usted a ingresado ${dni.length}`);
        }else if(dni.length==8){
            // console.log(digitos.join('')); 
            // console.log(digitos); 

                let letra=dni%23;
                // console.log(letra);
                console.log(`Mi DNI completo es ${dni} y convertido a letras es ${letras[letra]}  `);
            // for (let i = 0; i < digitos.length; i++) {
            //     const element = digitos[i];
            //     console.log(element);
            // }

        }else{
            console.log(`El digito ingresado es mayor que 8, se ingreso ${dni.length} digitos`);
        }
        console.log('+');
    }else if(signo==0){
        console.log('El DNI no puede ser cero');
    }else if(signo==-1){
        console.log('El DNI no puede ser negativo');
    }else{
        console.log('El caracter ingresado no es valido');
    }

    // if(dni>0){

    // }else{
    //     console.log('el numero no puede ser negativo');
    // }


    // let signo=Math.sign(+12);

    // if(signo==1){
    //     console.log('+');
    // }else if(signo==0){
    //     console.log(0);
    // }else{
    //     console.log('-');
    // }





// /* 
// 8 - Dado un array de letras, solicita un número de DNI y calcula que letra le corresponde. El número no puede ser negativo ni tener más de 8 dígitos. La posición de la letra es el resultado del módulo del número introducido entre 23
// */

// const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']

// const dni = prompt('Introduce tu DNI')

// if(dni.length==8 && parseInt(dni)>0){
//     let letra = dni%23
//     console.log(letra);
//     console.log(`Tu DNI completo es  ${dni}${letras[letra]}`);
// }