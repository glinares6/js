const person={
    name:'juan',
    age:26,
    sons:['laura','diego','pepe','rosa','tomas']
}

// console.log(person.name);
// console.log(person['name']);
// console.log(person['sons'][1]);

// for(const  key in person){
//     console.log(key);
// }

// for(const  key in person){
//     console.log(person[key]);
// }

// for(const son of person.sons){
//     console.log(son);
// }

console.log(`Hola ${person.name} tienes ${person.age} años  y tus hijos se llaman ${person.sons.join(', ')}`);