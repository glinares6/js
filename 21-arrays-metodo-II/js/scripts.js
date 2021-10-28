// Arrays- Metodo-II
    //  .from(iterable)-> Convierte en array de elemento itetable

    // .sort([iterable]) -> ordena los elementos de un array alfabeticamente (valor unicode) si le pasamos un callback lo ordena en función del algoritmo que le pasamos

    // .forEach(callback(curentValue,[index] ))-> ejecuta la función  indicada una vez por cada elemento del array.
    
    // .some(callback)->comprueba si al menos un elemento del araay cumple la condición

    // .every(callback)->Comprueba si todos los elementos del array cumplen la condición.
    
    // .map(callback)->Transforma todos los elementos del array y devuelve un nuevo array

    // .filter(callback)-> filtran todos los elementos de un array que cumplan la condición y devuelve un nuevo array

    // .reduce(callback) -> Reduce todos los elementos del array a un unico valor

// .from() ----------------------------------------------

// let word = 'hola mundo'
// console.log(Array.from(word));
// console.log(word.split(''));



// .sort() ----------------------------------------------
// const letters = ['b','c','z','a']
// const numbers= [1,8,100,300,3]

    // console.log(letters.sort());
    // console.log(numbers.sort());

    // console.log(numbers.sort((a,b) => a-b));

/*
    function menorMayor(a,b){
        if(a-b<0) return -1
        if(a-b>0) return 1
        if(a == b ) return 0
        
    }
    */
/* 
    function mayorMenor(a,b){
        if(b-a <0) return -1
        if(b-a>0) return 1
        if(b == a ) return 0
        
    }
    */

// .forEach() ----------------------------------------------

// const numbers=[12,25,47,84,98]

// numbers.forEach((number,index) =>
//  console.log(`${number} esta en la posición ${index}`))

// .some() - every() ----------------------------------------------

// const words = ['HTML','CSS','JavaScript','PHP']

// console.log(words.some(word => word.length>10));
// console.log(words.every(word => word.length>2));


// .map() ----------------------------------------------
// const numbers=[12,25,47,84,98]

// const numbers2=numbers.map(number =>number*2)

// console.log(numbers2);

// .filter() ----------------------------------------------
// const numbers=[12,25,47,84,98]

// const numbers2=numbers.filter(number =>number>80)

// console.log(numbers2);

// .reduce()------------------------------------------------
// const numbers=[1,2,3,4,5]

// console.log(numbers.reduce((a,b) =>a+b));


const users=[
    {
        name:'user1',
        online:true
    },
    {
        name:'user2',
        online:true
    },
    {
        name:'user3',
        online:false
    },
    {
        name:'user4',
        online:true
    },
    {
        name:'user5',
        online:false
    },
    {
        name:'user6',
        online:true
    }
]


const userOnline=users.reduce((cont,user) =>{
    if(user.online) cont++
    return cont
},0)

console.log(`Hay ${userOnline} usuarios conectados`);
