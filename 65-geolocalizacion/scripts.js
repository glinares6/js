/* 
https://developer.mozilla.org/es/docs/Web/API/Navigator/geolocation 
*/

const button=document.getElementById('button')

button.addEventListener('click',()=>{
    const geolocation=navigator.geolocation;
    geolocation.getCurrentPosition(getPosition,error,options)

    
})
    const options={
        enableHightAccuracy:true,
        timeout:5000,
        //? informacion(cache)
        maximunAge:0
    }
    const getPosition=(positon)=>{
        console.log(positon);
    }

    const error=(error)=> console.log(error);



