// callbacks-> una funcion que se ejecuta a traves de otra función
// los callbacks no son asincronos

// una promesa es un objeto con 2 callbacks internos


// arrays con objetos
const users=[{ id:1,name:'Dorian'},{id:2,name:'laura'},{id:3,name:'carlos'}]

const emails =[
    {
        id:1,
        email:'dorian@gmail.com'
    },
    {
        id:2,
        email:'laura@gamil.com'
    }
]

const getUser  = (id) =>{
    // devulve el cmapo que coincida con el valor en caso de exista te devuelve undefined
const user =users.find(user=>user.id==id)
console.log(user);
return promise=new Promise((resolve,reject)=>{
    if(!user) reject(`Doesn't exist an user with id ${id}`)
    else resolve(user)
})

}
// console.log(user);
const getEmail=(user)=>{
const email= emails.find(email => email.id==user.id)

return promise=new Promise((resolve,reject)=>{
    if(!email) reject(`${user.name} hasn't enail`)
    else resolve({
        id:user.id,
        name:user.name,
        email:email.email
    })
})

}
getUser(4)
// .then(user => getEmail(user))
// .then(res =>console.log(res))
// .catch(err=>console.log(err))
// getUser(2)
.then( getEmail)
.then(console.log)
.catch(console.log)


