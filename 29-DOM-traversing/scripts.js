// Recorer el DOM - DOM traversing

// Padre
// padre->parent(nodo del que desienden)
// parentNode ->Devuelve el nodo padre(que puede no ser un elemento)
// parentElement=devuelve el nodo elemnento padre

// Nota 
// los nodos del tipo Document y DocumentFragment nunca van a tapar un elemento padre,parentNode devuelve siempre null.

// hijos-> child(Nodo que deciende de un padre)
    // childNodes-> Devuelve todos los nodos hijos
    // children-> Devuelve todos los nodos elementos hijos
    // firstChild-> Devuelve al primer nodo hijo
    // firstElementChild-> Devuelve el primer nodo elemento hijo
    // lastChild-> Devuelve el ultimo nodo hijo
    // lastElementChild-> Devuelve el ultino nodo elemento hijo
    // hasChildNodes()-> Devuelve true si el nodo tiene hijos y false si no lo tiene


// hermanos-> siglins(Nodo del mismo nivel)
    // nextSibling-> Devuelve el siguiente nodo hermano
    // nextElementSibling-> Devuelve el siguiente nodo hermano
    // previousSibling-> 
    // previousElementSibling

// Cercamos
    // closest(selector) -> selecciona el nodo más cercano que cumpla con el selector,aún es experimental


const parent=document.getElementById('parent')

// subiendo niveles en el DOM
// console.log(parent.parentElement);
// console.log(parent.parentElement.parentElement.parentElement);

// console.log(parent);

// console.log(parent.childNodes);
// console.log(parent.children[2]);

// console.log(parent.firstChild);
// console.log(parent.firstElementChild);
// console.log(parent.lastChild);
// console.log(parent.lastElementChild);

// console.log(parent.childNodes[3].hasChildNodes());

// console.log(parent.parentElement.nextSibling);
// console.dir(parent.parentElement.nextElementSibling);

console.log(parent.parentElement.previousSibling);
console.log(parent.parentElement.previousElementSibling);

