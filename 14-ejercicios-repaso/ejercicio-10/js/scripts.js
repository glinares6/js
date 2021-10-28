// 10 - Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.


// declarar un array de colores

let colores=["azul", "amarillo", "rojo", "verde", "rosa"];

let color=prompt(`Se tienen los colores \n 1. ${colores[0]}\n 2.${colores[1]}\n 3.${colores[2]}\n 4.${colores[3]}\n 4.${colores[4]}`).toLowerCase();
console.log(`El array colores tiene `);
console.log(colores);
console.log(`Se a escrito ${color}`);


        if(colores.includes(`${color}`)){

            console.log(`El color ${color} se encuentra dentro del array colores`);

        }else{
            console.log(`No se encuentra en el array colores`);
        }



// if(colores.indexOf(color)!==-1){
//         console.log('tu color se encuentra en el array');
// }else{
//     console.log('tu color no esta en el array');
// }

        // for(let items of colores){

        //             if(items.includes(`${color}`)){

        //     console.log(`El color ${color} esta dentro del array colores`);
        //     // console.log(colores);
        //     // for (let i = 0; i < colores.length; i++) {
        //     //     console.log(`Se introducieron los colores ${colores[i]}`);
        //     // }


        // }else{
        //     console.log(`El array del color ${items} no coincide con ${color}`);
        // }
        // }




