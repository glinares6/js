/* 
    https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    la destructuracion es una expresion de javascripts que hace posible la extraccion de datos de arreglos u objetos
*/

const person={
    name:'Dorian',
    age:20,
    email:'dorian@gmail.com'
}
// llamado a un objeto(forma tradicional)
// const name=person.name
// const age=person.age
// const email=person.email

// destructuring
// const {name:nombre,age:edad,email}=person
// const {name,age,email}=person
// console.log(nombre,edad,email);
// console.log(name,age,email);

// // destructuring de arreglo
// const numbers=[1,2,3,4]

// const [a,b,terceraPosition]=numbers
// console.log(terceraPosition);


// // destructuring de objeto
// const printPerson=({name:nombre})=>{
//     console.log(nombre);
// }
// const printPerson=({name})=>{
//     console.log(name);
// }

// printPerson(person)

const getUsers= async ()=>{
    const {data:users}=await axios.get('https://jsonplaceholder.typicode.com/users')

    
  console.log(users);
 
  for(const agru of users){
      console.log(agru.name);
    }

//? forma convencional
    // for (let i = 0; i < users.data.length; i++) {
    //     console.log(users.data[i].name);
        
    // }
    
        
}


getUsers()