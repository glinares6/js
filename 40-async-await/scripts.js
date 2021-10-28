// const getName = async ()=>{

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             // return 'Doeian'
//               resolve('Dorian')
        
//             },1500)
//     })
        
    
//     }
    
// // console.log(getName());
// // getName().then(name=> console.log(name))
// const sayHello = async ()=>{
//     const name= await getName()
//     return `Hello ${name}`
// }

// // console.log(sayHello());
// sayHello().then(res=> console.log(res))


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

const getUser  = async (id) =>{
const user =users.find(user=>user.id==id)
    if(!user) throw new Error(`Doesn't exist an user with id ${id}`)
    else return user
}
// console.log(user);
const getEmail=async (user)=>{
const email= emails.find(email => email.id==user.id)
    if(!email) throw new Error(`${user.name} hasn't enail`)
    else return {
        id:user.id,
        name:user.name,
        email:email.email
    }
}
// console.log( getEmail(1));
const getInfo = async (id)=>{
    try{
        
//  return getEmail(getUser(1)) 
 const user =  await getUser(id)
 const res= await getEmail(user)
 return `${user.name} email is ${res.email}`

    }catch(error){
        console.log(error)
    }
}

// console.log(getInfo());
getInfo(2).then(res=> console.log(res))



// para mayor entendimiento practicar con la api de placeholder ***************