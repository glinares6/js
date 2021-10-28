const form =document.getElementById('form')
const characters=document.getElementById('characters')
const table=document.getElementById('table')

const radiusMale=document.getElementById('radiusMale')
const radiusFemale=document.getElementById('radiusFemale')

let xhr

const new_table_org=table.cloneNode(true)
const new_table_male=table.cloneNode(true)
const new_table_female=table.cloneNode(true)

form.addEventListener('submit', (e) => {
    e.preventDefault()
    getData(characters.children[characters.selectedIndex].value)
})


const getAjax = () =>{
     
    if(window.XMLHttpRequest) xhr= new XMLHttpRequest()
    else xhr= new ActiveXObject("Microsoft.XMLHTTP")

}


const getData = (id) => {

    new_table_male.remove()
    new_table_female.remove()

    getAjax()

    if (id == undefined) {
        xhr.open('GET', 'marvel.php')

        xhr.addEventListener('load', (data) => {
            const dataJSON = JSON.parse(data.target.response)
            console.log(dataJSON)
        
        const fragment = document.createDocumentFragment()

        for (const heroes of dataJSON) {
            const option = document.createElement('OPTION')
            option.setAttribute('value', heroes.ID)
            option.textContent = heroes.Name
            fragment.appendChild(option)
        }

            characters.appendChild(fragment)
        })
    } else {
        

        xhr.open('GET', `marvel.php?id=${id}`)

        xhr.addEventListener('load', (data) => {
            const dataJSON = JSON.parse(data.target.response)
            console.log(dataJSON)

            const fragment = document.createDocumentFragment()

            for (const heroe of dataJSON) {
                // const fr=document.createElement('THEAD') 

                // const frh1=document.createElement('TH')  
                // const frh2=document.createElement('TH')  
                // const frh3=document.createElement('TH')  
                // const frh4=document.createElement('TH')  
                // const frh5=document.createElement('TH')  
 

                const row = document.createElement('TR')
                const dataName = document.createElement('TD')
                const dataAlignment = document.createElement('TD')
                const dataHometown = document.createElement('TD')
                const dataGender = document.createElement('TD')
                const dataFighting = document.createElement('TD')
                
                // frh1.innerHTML="<th>Name</th>"
                // frh2.innerHTML="<th>Alignment</th>"
                // frh3.innerHTML="<th>Hometown</th>"
                // frh4.innerHTML="<th>Gender</th>"
                // frh5.innerHTML="<th>Fighting Skills</th>"


                dataName.textContent = heroe.Name
                dataAlignment.textContent = heroe.Alignment
                dataHometown.textContent = heroe.Hometown
                dataGender.textContent = heroe.Gender
                dataFighting.textContent = heroe.Fighting_Skills

                // fr.append(frh1)
                // fr.append(frh2)
                // fr.append(frh3)
                // fr.append(frh4)
                // fr.append(frh5)


                row.append(dataName)
                row.append(dataAlignment)
                row.append(dataHometown)
                row.append(dataGender)
                row.append(dataFighting)


                // fragment.appendChild(fr)
                console.log(fragment);
                fragment.appendChild(row)
            }
            
            if (table.children[1]) {
                table.removeChild(table.children[1])
            }
            table.appendChild(fragment)
            // table.prepend(fragm)
            // console.log(table);
            // table.firstChild.replaceWith(fragment)
            console.log(table);


        })
    }
   
        // new_table_female.remove()
    xhr.send()
}

// deacuerdo a su genero sean hombres o mujeres clasificarlos en la tabla (radoi-bottom -click)
// llama a los elementos del DOM
// ispara el evento
getData()

radiusMale.addEventListener('click',() =>{

    //  table.remove() 

    // console.log(new_table);
    // console.log(table);
    // hacemos la conexion a la bd por ajax

    // new_table.parentNode.appendChild(new_table, table);
    getAjax()
    xhr.open('GET','marvel.php')

    xhr.addEventListener('load', (data) => {
        const dataJSON = JSON.parse(data.target.response)
        
        // comprobamos que se envio el query
        // console.log(dataJSON);
        // console.log(dataJSON[0].Gender);
        // creamos el fragmento
        const fragmentGender= document.createDocumentFragment()
        // recoremos al array
        // console.log(table.children[0].children[1]);
        for(const heroes of dataJSON){
            // console.log(heroes);
               // creamos los elemenos     
                // seleccionamos los que son del genero masculino
                const row = document.createElement('TR')
                const dataName = document.createElement('TD')
                const dataAlignment=document.createElement('TD')
                const dataHometownt=document.createElement('TD')
                const dataGender=document.createElement('TD')
                const dataFighting=document.createElement('TD')


                dataName.textContent=heroes.Name
                dataAlignment.textContent=heroes.Alignment
                dataHometownt.textContent=heroes.Hometown
                dataGender.textContent=heroes.Gender
                dataFighting.textContent=heroes.Fighting_Skills
                
                row.setAttribute('value',heroes.Gender)
                row.appendChild(dataName)
                row.appendChild(dataAlignment)
                row.appendChild(dataHometownt)
                row.appendChild(dataGender)
                row.appendChild(dataFighting)

                
                
                if(row.getAttribute('value') == 'Male'){
                    // new_table_male.remove()
                    // console.log(row);
                    fragmentGender.appendChild(row)    
                    
                    new_table_male.appendChild(fragmentGender)
                }
                    
                
            }

            if (table.children[1]) {
                table.removeChild(table.children[1])
            }
            
            // console.log(table.parentNode.lastElementChild);
            // table.parentNode.replaceChild(new_table_male,table.parentNode.lastElementChild)
            // console.log(table.parentNode.children[4]);
            // console.log(table.parentElement.lastElementChild);
            table.lastElementChild.replaceWith(new_table_male)
            // table.before(new_table_male)
            // new_table_female.remove()
            
            




        // form.replaceChild(new_table_female,new_table_male)
        
        
        
        
        // if(new_table_male.children[1]){
        //     // table.removeChild(table.children[1])
        //     new_table_male.removeChild(new_table_male.children[1])
        // }
        
        
            
        
    })
    

    
    xhr.send()
})



radiusFemale.addEventListener('click',() =>{
    //   console.log(new_table_male);
    // hacemos la conexion a la bd por ajax
    getAjax()
    xhr.open('GET','marvel.php')

    xhr.addEventListener('load', (data) => {
        const dataJSON = JSON.parse(data.target.response)
        
        // comprobamos que se envio el query
        // console.log(dataJSON);
        // console.log(dataJSON[0].Gender);
        
        // creamos el fragmento
        const fragmentGenderF= document.createDocumentFragment()
        
        // recoremos al array
        for(const heroes of dataJSON){
            // console.log(heroes);


               // creamos los elemenos
                
                // seleccionamos los que son del genero masculino
                const row = document.createElement('TR')
                const dataName = document.createElement('TD')
                const dataAlignment=document.createElement('TD')
                const dataHometownt=document.createElement('TD')
                const dataGender=document.createElement('TD')
                const dataFighting=document.createElement('TD')


                dataName.textContent=heroes.Name
                dataAlignment.textContent=heroes.Alignment
                dataHometownt.textContent=heroes.Hometown
                dataGender.textContent=heroes.Gender
                dataFighting.textContent=heroes.Fighting_Skills
                
                row.setAttribute('value',heroes.Gender)
                row.appendChild(dataName)
                row.appendChild(dataAlignment)
                row.appendChild(dataHometownt)
                row.appendChild(dataGender)
                row.appendChild(dataFighting)



                if(row.getAttribute('value') == 'Female'){
                    // console.log(row);
                    // new_table_male.remove()
                    // new_table_female.remove()
                    fragmentGenderF.appendChild(row)    
                    new_table_female.appendChild(fragmentGenderF)
                }
   
                
                
            } 

            if (table.children[1]) {
                table.removeChild(table.children[0])
            }

            // console.log(new_table_female)
            // console.log(table);

            // new_table_female.remove()
            // console.log(table.parentNode.children[4].children[0]);
            table.lastElementChild.replaceWith(new_table_female)
            // table.parentNode.appendChild(new_table_female)
            // table.parentNode.lastChild.replaceWith(new_table_female)





            // table.parentElement.lastElementChild.replaceWith(new_table_female)
            // console.log(table.parentElement.lastElementChild);
            
            // console.log(new_table_female);
            // console.log(table.children[1]);
            
            
            // if (table.children[1]) {
                //     console.log('se puede?');
                //     table.parentElement.removeChild(table.children[1])
                // }
                // table.before(new_table_female)
                // new_table_male.remove()       
                // // console.log('si',table.parentNode);
                // // console.log(table.parentElement.children[5]);
                
                // table.parentElement.removeChild(table.parentElement.children[5])
                
                
            })
            


    xhr.send()
})

// practicar  los supererues son buenos, neutral , malos y clasificarlos el la tabla (combo -submit)

