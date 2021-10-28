// 4 - Escribe un programa que pida un número entero mayor que 1 y que escriba si el número primo o no. Un número primo es aquel que solo es divisible por sí mismo y la unidad


// solicitar numero
    let numero=parseInt(prompt('escriba un numero'));

    if(numero>1){
        
        contador=0;
        for(i=1;i<=numero;i++){
    
        if((numero % i)==0 ){
    
            contador++;
           
        }
        }
        

        if(contador<=2){
            console.log(`El numero ${numero} es primo`);
        }else{
            console.log(`El numero ${numero} no es primo`);
        }
    
         // console.log(`El numero  ${numero} es mayor que 1`);
     }else if(numero<1){
         console.log(`El numero ${numero} es menor que 1`);
     }else if(numero==1){
         console.log(`El numero es igual a 1`);
     }else{
         console.log(`El caracter ingresado no es valido`);
     }
    


    // if(numero>1){
        
    //     for(j=1;j<=numero;j++){
            
    //     contador=0;
    //     for(i=1;i<=numero;i++){
    
    //     if((j % i)==0 ){
    
    //         contador++;
           
    //     }
    //     }
        

    //     if(contador<=2){
    //         console.log(`El numero ${j} es primo`);
    //     }else{
    //         console.log(`El numero ${j} no es primo`);
    //     }
    
    
    // }
    //      // console.log(`El numero  ${numero} es mayor que 1`);
    //  }else if(numero<1){
    //      console.log(`El numero ${numero} es menor que 1`);
    //  }else if(numero==1){
    //      console.log(`El numero es igual a 1`);
    //  }else{
    //      console.log(`El caracter ingresado no es valido`);
    //  }

