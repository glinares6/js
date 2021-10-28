/* 
https://developer.mozilla.org/es/docs/Web/API/notification 
icono:
https://www.flaticon.es/icono-gratis/en-todo-el-mundo_814513?term=world&page=1&position=18
*/

const permissions=document.getElementById('permissions')

permissions.addEventListener('click',()=>{
    if(Notification.requestPermission === 'granted'){
        getPermissions()
    }else{
        notify()
    }
})


const getPermissions=()=>{
    Notification.requestPermission()
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
}

const notify=()=>{
    const options={
        body: 'lorem ipsun dolorddddddd',
        icon:'world.png',
        data:'Extra data',
        tag:'notification demo'
    }
    const notification=new Notification('hello word',options)

    notification.addEventListener('close',()=> console.log('close'))
    notification.addEventListener('show',()=> console.log('show'))

    console.log(notification);
}
