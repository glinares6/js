
// strings
let cadena="Hola Mundo";

// propiedades
// lenght->devuelve la longitus de la cadena 

console.log(cadena.length);

// metodos

// Todos los metodos devuelven una cadena nueva

// toUpperCase-> devuelve una cadena a mayusculas
    // console.log(cadena.toUpperCase());
    // console.log(cadena);
    // let cadenaMayus= cadena.toUpperCase();
    // console.log(cadenaMayus);



// toLowerCase->Pasa la cadena a minusculas
    // console.log(cadena.toLowerCase());


// indexOf(string) -> devuelve la posición en la que se encuentra el string, si no encuentra devuelve -1
    // console.log(cadena.indexOf('o'));
    // console.log(cadena.indexOf('Hola'));


// replace(valor a buscar, valor nuevo)->reemplaza el valor de la cadena que le digamos y pone el valor nuevo.
    // console.log(cadena.replace('Mundo','Youtube'));


// subString(inicio[,fin]) -> Extrae los caracteres desde incio hasta fin(el final no se incluye)
    // console.log(cadena.substring(3,7));
    // console.log(cadena.substring(3));


// slice(inicio, [,fin]) -> igual que substring,admite valores negativos,si podemos valores negaticosempezaran desde atraz

// si no incluye hasta el final se extrae hasta el final
    // (2,-4)-> Enpieza a contar en el tercer caracter y los 4 ultimos no los considera
    // console.log(cadena.slice(-3));
    // console.log(cadena.slice(2));
    // console.log(cadena.slice(0,-2));

// trim()->Elimina los espacios al inicio y al final de la cadena
    // let cadena2= '                      Hola Youtube ,estamos trabajando con cadenas                  ';
    // console.log(cadena2.trim());

// ES6
// startswith(valor [,inicio])->Sirve para saber si la cadena empieza con ese valor,devuelve true o false
    // console.log(cadena.startsWith('H'));
    // console.log(cadena.startsWith('h'));
    // console.log(cadena.startsWith('M',5));


// endswith(valor [,longitud]) -> sirve para saber si la cadena termina con ese valor , devuelve true o false.
    // console.log(cadena.endsWith('o'));
    // console.log(cadena.endsWith('a',4));
    // console.log(cadena.endsWith('n',8));
    // console.log(cadena.endsWith('Mundo'));

// includes(valor [,inicio]) -> igual que indexOf pero devuelve true o false
    // console.log(cadena.includes('n'));
    // console.log(cadena.includes('n',5));
    // console.log(cadena.includes('n',2));

// repeat(valor)-> Repite el string el número de veces que le indiquemos
    // let cadena3='Hola';
    // console.log(cadena3.repeat(3));
    // console.log('r'.repeat(10));


// strings reference
//     https://www.w3schools.com/jsref/jsref_obj_string.asp
// https://dev.to/soyleninjs/6-formas-de-convertir-un-string-en-array-con-javascript-320n

let nombre ='Juan';
let apellido= 'Gomez';
let edad=20;

console.log('hola '+nombre+' '+apellido+'. Tienes '+(edad+1)+' años.');

// Template string
console.log(`Hola ${nombre} ${apellido}.El año que viene tendras ${edad+1} años`);