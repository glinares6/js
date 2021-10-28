const form =document.getElementById('form')
const button=document.getElementById('submitButton')

const name=document.getElementById('name')
const email=document.getElementById('email')
const gender=document.getElementById('gender')
const terms=document.getElementById('terms')


const formIsValid={
    name:false,
    email:false,
    gender:false,
    terms:false
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    validateForm()

})

name.addEventListener('change',(e)=>{
if(e.target.value.trim().length>0) formIsValid.name=true
})

email.addEventListener('change',(e)=>{
if(e.target.value.trim().length>0) formIsValid.email=true
})

gender.addEventListener('change',(e)=>{
    // console.log(e.target.checked);
if(e.target.cheked = true) formIsValid.gender=true
})

terms.addEventListener('change',(e)=>{
    formIsValid.terms=e.target.checked
        e.target.checked ? button.removeAttribute('disabled') : 
        button.setAttribute('disabled',true)
})

validateForm = ()=>{
    // console.log(Object.keys(formIsValid));
    // console.log(Object.values(formIsValid));
    const formValues=Object.values(formIsValid)
    // devuelve  la posición del campo de ese valor en caso de no encontrar devuelve -1
    const valid=formValues.findIndex(value=>value==false)
    console.log(valid);
    if(valid==-1)  form.submit()
    else alert('form invalid')

}

