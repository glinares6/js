// sintaxis simple

// switch(evaluación){
//     case n1:
//         // codigo
//     break;
//     case n2:
//         // codigo
//     break;
//     default:
//         // cogido
// }

// // sintaxis multiples
//     switch(evaluación){
//         case n1:
//         case n2:
//         case n3:
//         case n4:
//             // codigo
//             break;
//         case n5:
//         case n6:
//             // codigo
//             break;
//             default:
//     }

    let num = 4;
    switch(num){
        case 1: console.log(`${num} tiene el valor de 1`);
        break;
        case 2: console.log(`${num} tiene el valor de 2`);
        break;
        default: console.log(`${num} no tiene el valor de 1 y 2`);

    }

    switch(num){
        case 1:
        case 3:
        case 5:
            console.log(`${num} es impar`);
            break;
        case 2:
        case 4:
            console.log(`${num} es par`);
    }

    // sintaxis multiple encadenada