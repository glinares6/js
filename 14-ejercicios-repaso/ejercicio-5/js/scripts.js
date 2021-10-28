// 5 - Escriba un programa que pida un número entero mayor que cero y calcule su factorial. El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.

// solicitar un numero

    let number=parseInt(prompt('Escriba el numero'));

    if(number>0){
        incremento=1;
        for (let i = 1; i <=number; i++) {
            incremento=incremento*i;    
        }
        console.log(`El el factorial de ${number} es ${incremento}`);
    }else{
        console.log(`No se precisa el resultado`);
    }