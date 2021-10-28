// 3 - Solicita un número e imprime todos los números pares e impares desde 1 hasta ese número con el mensaje "es par" o "es impar" si el número es 5 el resultado será: 1 - es impar 2 - es par 3 - es impar 4 - es par 5 - es impar



// solicitud del numero
    let numero= parseInt(prompt('ingresar numero'));

    // let numero =[1,2,3,4,5];

    for(let i=1; i<=numero;i++){
        // console.log(`${i}`);
            if(i % 2 ==0){
                console.log(`El numero ${i} es par`);
            }else{
                console.log(`El numero ${i} es impar`);
            }
    
        
    }