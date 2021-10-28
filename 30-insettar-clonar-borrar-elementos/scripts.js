// insertar y eliminar elementos II

// parent.insertBefore(newElement,referenceElement) -> insertar un elmeneto antes del elemento de referencia.

// SOPORTE TOTAL
    // parent.insertAdjacentElement(position,element)
    
    // parent.insertAdjacentHTML(position,HTML)
    // parent.insertAdjacentText(position,text)


// positions

    // beforebegin -> antes de que empiece (hermano anterior)
    // afterbegin -> despues de que empiece (primer hjio)
    // beforeend -> antes de que acabe (ultino hijo)
    // afterend -> despues de que acabe (hermano siguiente)

    // parent.replaceChild(newChild,oldChild) -> reeemplaza un hijo por otro 


    const list = document.getElementById('list')
    const newElement=document.createElement('LI')
    newElement.textContent="I'm new element"

    // list.appendChild(newElement)

    // Insertar de manera general
    // list.insertBefore(newElement,list.children[0])

    // list.insertAdjacentElement('beforebegin',newElement)
    // list.children[0].insertAdjacentElement('beforebegin',newElement)

    // list.insertAdjacentElement('afterbegin',newElement)
    // list.insertAdjacentElement('beforeend',newElement)

    // list.insertAdjacentElement('afterend',newElement)
    // list.children[0].insertAdjacentElement('afterend',newElement)
    
    
    // list.children[1].insertAdjacentHTML('afterend','<li>elementos con HTML</li>')
    // list.children[1].insertAdjacentText('afterend','<li>elementos con HTML</li>')

    



    // DOM manipulation convenience methods - Jquery like

    // https://caniuse.com/?search=jquery-like

    // position
    // parent.before() -> antes de que empiece(hermano anterior)
    // parent.prepend() -> despues de que empiece(primer hijo)
    // parent.append() -> antes de que acabe(ultimo hijo)
    // parent.after() -> despues de que acabe(hermano siguiente)



    // child.replaceWith(newChild) 


    
    // factorizando metodos ----------------------------------------
    // list.before(newElement)
    // list.children[0].before(newElement)
    
    // list.prepend(newElement)
    // list.append(newElement)
    
    // list.after(newElement)
    // list.children[1].after(newElement)
    
    
    
    
    // list.children[1].replaceWith(newElement)
    // document.getElementById('child-to-replace').replaceWith(newElement)
    


    
    // clonar y eliminar elementos
    // Element.cloneNode(true|false) -> clona el nodo.Si le pasamos true clona todo el elemento con los hijos, si le pasamos false clona solo el elemento sin los hijos 
    // Element.remove() -> elimina el nodo del DOM 
    // Element.removeChild(child) -> elimina el nodo hijo del DOM
    


// console.log(list.cloneNode(true));
// list.after(list.cloneNode(true))


// list.remove()
list.removeChild(list.children[0])



// RECORIENDO EL DOM - REEMPLAZANDO EL TITULO DESDE LA LISTA  -----------------------------------------------------------------
// desde el NODO PADRE reeemplazamos

// const title =document.getElementById('title')
// title.replaceWith(newElement)



// 2da forma ------------------------------------------
// dede el NODO HIJO reeemplazamos

// const newElement1=document.createElement('H1')
// newElement1.textContent="I'm new element what null"

// console.log(newElement1);
// console.log(list.parentElement.childNodes[1]);
// // console.log(cuerpo.parentElement1);
// list.parentElement.replaceChild(newElement1,list.parentElement.childNodes[1])




