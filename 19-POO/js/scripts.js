class Persona{
    constructor(nombre,apellido,edad){
        this.nombre=nombre
        this.apellido=apellido
        this.edad=edad

        this.datos = `me llamo ${nombre} ${apellido} y tengo ${edad} años`
    }

saludar(){
    return  `hola me llamo ${this.nombre} y tengo ${this.edad} años`
    }
}
const juan =new Persona('juan','garcia',25);
const marta =new Persona('marta','garcia',35);

console.log(juan)
console.log(juan.saludar());
console.log(marta.saludar());


