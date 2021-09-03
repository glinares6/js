// condicional  simpleÇ
let num1=1;
let num2=5;

// if(num>0){
//     console.log(`${num} es mayor que 0`);
//     console.log(`${num} es mayor que 0`);
// } 

// if(num>0){
//     console.log(`${num} es mayor que 0`);
// }else{
//     console.log(`${num} es menor que 0`);
// }

// condicionales multiples

// if(num>0){
//     console.log(`${num} es mayor que 0`);
// }else if(num<0){
//     console.log(`${num} es menor que 0`);
// }else{
//     console.log(`${num} es giual a 0`);
// }


// operadores logicos

// && and
// || o

// if(num1>0 || num2>0){
//     console.log(`${num1} y ${num2} son mayores que 0`);
// }

if(num1>0){
    if(num2>0){
        console.log(`${num1} y ${num2} son mayores que 0`);
    }else if(num2<0){
    console.log(`${num1} es mayor que 0 y ${num2} es menor que 0`);
}else{
    console.log(`${num1} es mayor que 0 y ${num2} es igual a 0`);
}
}else if(num1<0){
    if(num2>0){
        console.log(`${num1}no es mayor que 0 y ${num2} es mauor  que 0`);
    }else if(num2<0){
    console.log(`${num1}  y ${num2} son menores que 0`);
}else{
    console.log(`${num1} es menor que 0 y ${num2} es igual a 0`);
}
}else{
    if(num2>0){
        console.log(`${num1} es igual que 0 y ${num2} es mauor  que 0`);
    }else if(num2<0){
    console.log(`${num1}  es igual que 0 y ${num2} esmenor que que 0`);
}else{
    console.log(`${num1}y ${num2} son iguales que 0`);
}
}

// ordenar 3 numeros de menor a mayor -> ejercicio

let word= 'hola';
if(word.length>4){
    console.log(`${word} tiene más de 4 letras`);
}else if(word.length<4){
    console.log(`${word} tiene menor de 4 letras`);
}else{
    console.log(`${word} tiene 4 letras`);
}

let respuesta =true;

if(respuesta ==true) console.log(`${respuesta} tiene el valor de true`);
if(respuesta ==false) console.log(`${respuesta} tiene el valor de false`);

if(respuesta) console.log(`${respuesta} tiene el valor de true`);
if(!respuesta) console.log(`${respuesta} tiene el valor de false`);

