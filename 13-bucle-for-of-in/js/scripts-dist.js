// Determinados
    // bucle for of / for in

    // for(let variable for estructura){
    //     // código a ejecutar
    // }

    // Palabras reservadas de bucles
        // break -> Rompe el bucle
        // continue -> Se salta las posciones que le indiquemos y después continua  su ejecución.
let names=['Paco','Jose','Paula','Marçía'];

for(let i=0; i< names.length; i++){
    if(names[i]==='Paula'){
        // i++;
        continue
    }
    console.log(names[i]);
}

for(let name of  names){
    if(name==='Paula'){
        continue
    }
    // console.log(names.indexOf(name));
    console.log(name);
}

for(let index in names){
    if(names[index]==='Paula'){
        continue
    }
    // console.log(names[index]);
    console.log(index);
}

