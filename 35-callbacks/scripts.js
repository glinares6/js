// callbacks-> una funcion que se ejecuta a traves de otra función
// los callbacks no son asincronos

// const getUser=(id,cb) =>{
//     const user ={
//         name:'Dorian',
//         id:id
//     }
//     // console.log(user);
//     if(id==2) cb('user not exist')
//     else cb(null,user)
//     // cb('user not exist')
// }

// getUser(1,(err,user) =>{
//     if(err) return console.log(err);
//     console.log(`user name is ${user.name}`);
// })


// arrays con objetos
const users=[
        {
            id:1,
            name:'Dorian'
        },
        {
            id:2,
            name:'laura'
        },
        {
            id:3,
            name:'carlos'
        }
]


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

// crea una función con un callback
const getUser  = (id,cb) =>{
    const user =users.find(user=>user.id==id)

    if(!user) cb(`not exist a user with id ${id}`)
    else cb(null,user)
}

// console.log(user);

const getEmail=(user,cb)=>{
    const email= emails.find(email => email.id==user.id)
    if(!email) cb(`${user.name} hasn't enail`)
    else cb(null,{
        id:user.id,
        name:user.name,
        email:email.email
    })

}

// la ejecución de la función
getUser(2,(err,user) =>{
    if(err) return  console.log(err);
    // improme el array de objetos
    // console.log(user);

    getEmail(user,(err,res)=>{
        if(err) return console.log(err);
        // getEmail(user,(err,res)=>{
        //     if(err) return console.log(err);
                    console.log(res);
        // })
    })
})