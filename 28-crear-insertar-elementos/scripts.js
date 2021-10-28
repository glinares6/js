// DOM- Crear e insertqar elementos

// crear un elemento -> document.createElement(element)
// Escribir texto en un elemento-> element.textContent= texto
// Escribir HTML en un elemento-> Element.innerHTML = codigo HTML

// Añadir un elemento al DOM -> parent.appendChild(element)

// fragmentos de codigo-> document.createDocumentFragment(fragment)


const days= ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']

const title= document.getElementById('title')
const daysList =document.getElementById('daysList')
const selectDays=document.getElementById('daysSelect')


// crear un elemento
// const itemList=document.createElement('LI')
// itemList.textContent='lunes'

// daysList.appendChild(itemList)


// title.textContent='DOM <span>Crear e insertar elementos</span> '
title.innerHTML='DOM <span>Crear e <span>insertar </span>elementos</span> '

// creando el fragmento de codigo
const fragment=document.createDocumentFragment()
const fragmentCombo=document.createDocumentFragment()


for(const day of days ){
    // console.log(day);
    // daysList.textContent=`${day}`;
    // daysList.innerHTML+=`<li>${day}</li>`

const itemList=document.createElement('LI')
itemList.textContent=day
fragment.appendChild(itemList)

daysList.appendChild(fragment)    

}

for(const day of days){

    const itemCombo=document.createElement('OPTION')
    itemCombo.setAttribute('value',day.toLowerCase())
    itemCombo.textContent=day
    fragmentCombo.appendChild(itemCombo)

    selectDays.appendChild(fragmentCombo)
}

// añadir a la lista del combo




console.dir(fragment);
// console.log(itemList);



