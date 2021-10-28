// 2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo. triángulo = b * h/2 rectángulo = b * h círculo = π * r2 (pi * radio al cuadrado)


// Area del trianguño


// Area del rectangulo


// Area del circulo


    // preguntar de que figura se quiere calcular el area


let figuraGeometrica= parseInt(prompt('Elija el area de la figura geomerica\n'+
                            '1.Triangulo\n'+
                            '2.Rectangulo\n'+
                            '3.Circulo' ));

    // Solicitar los datos que se requieren 
    switch (figuraGeometrica) {
        case 1:
            let baseT = prompt('lontitud de la base del triangulo');
            let altura= prompt('longitud de la altura del triangulo')

            let aTriangulo=(baseT * altura)/2;

            console.log(` resultado del are del triangulo es ${aTriangulo}`);
            break;
        case 2:
            let baseR = prompt('longitud  de la base del trctangulo');
            let alturaR=prompt('longitud de la altura del rectangulo');
            
            let aRectangulo =baseR *alturaR;

            console.log(`El resultado del area del rectangulo es ${aRectangulo}`);
            break

        case 3:
            let pi=Math.PI;
            let radio=parseInt(prompt('longitud del radio del circulo'));

            let aCirculo= pi*(Math.pow(radio,2));
            
            console.log(`El resultado del area  de la circunferencia es ${aCirculo}`);
            break
            default:
            console.log('no salio como lo esperado');
            break;
    }

