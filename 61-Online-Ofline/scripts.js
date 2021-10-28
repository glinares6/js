
const alert = document.getElementById('alert')

addEventListener('online', (e) => {
    setAlert(1);
})

addEventListener('offline', (e) => {
    setAlert(0);
})


const setAlert=(status)=>{
    alert.classList.remove('alert-online')

    alert.classList.remove('alert-offline')

    status ===0 ? 
    setTimeout(()=>{
        alert.textContent="ups, it seems you're offline"
        alert.classList.add('alert-offline')
    },1000):
    setTimeout(()=>{
        alert.textContent="great, it seems you're online again"
        alert.classList.add('alert-online')
    },1000)


}