// expresiones regulares
    // son una secuencia de caracteres que forma un patron de busqueda, principalmente utilizado para la busqueda  de patrones de cadenas de caracteres u operaciones de susutituciones

    // https://regex101.com/
    
    // sintaxis
        // /patron/
    // dorian@gamil.com
        // /patron/
        // i-> ignore case:No diferencia entre mayusculas y minusculas
        // g->global:Busca de forma global;es decir,no se para después de la primera coincidencia 



        const text=document.getElementById('text').textContent

        const regEx=/lorem/gi

        console.log(regEx.test(text));
        console.log(text.includes('Lorem'));