// document.getElementById('id') -> Acceder a los elementos a través de su id

// document | element.querySelector('selectorCSS') -> Accede al primer elemento que conincide con el selector CSS

// document | element.querySelectorAll('selectorCSS') -> Accede a todos los elemento que conincidan  con el selector CSS, devuelve un modeList



// const title = document.getElementById('title')

// title.textContent= "DOM-Accediendo a nodos"


// const paragraph=document.querySelector('.paragraph:nth-child(3)')
// const paragraph=document.querySelector('.paragraph')
// const span = paragraph.querySelector('span')


// const title= document.getElementById('title').querySelector('span')

// console.log(span1.textContent);
// console.log(span.textContent);

const paragraphs= document.querySelectorAll('.paragraph')

const paragraphsSpread= [...document.querySelectorAll('.paragraph')]
const paragraphsArray= Array.from(document.querySelectorAll('.paragraph'))

// paragraphs[0].style.color="red"
// paragraphs.map(p=>p.style.color='green')
// paragraphsSpread.map(p=>p.style.color='green')
paragraphsArray.map(p=>p.style.color='blue')

console.log(paragraphs);
console.log(paragraphsSpread);
console.log(paragraphsArray);





