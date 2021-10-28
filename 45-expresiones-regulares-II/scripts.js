
    // https://regex101.com/
    // sintaxis
        // /patron/
        // bandera
            // i-> ignore case:No diferencia entre mayusculas y minusculas
            // g->global:Busca de forma global;es decir,no se para después de la primera coincidencia 

        // comodines
            // Define un comodin dentro del patronn.El simbolo es "."
            // /..ogle/

            // Listado de caracteres validos :  Entre corchetes se pone una lista de los caracteres validos [aeiou], con esto cogeremos todas las vocales
            // /[123]/

            // Rangos : Entre corchetes si ponemos un guión entre dos caracteres estableceremos un rango. [a-z]
            // Todas las letras minusculas
            // tabla asci
                // https://ascii.cl/es
                // /[1-5]/

            // Mezcla entre rangos y listas
                // Podemos unir los dos exteriores en una sola expresión [0-sou].Segiran numeros del 0 al 5 y la letra "o" y la letra "u"
                // /[a-o123]/

            // Cadenas completas
                // Para establecer una cadena completa debe ir 
                // entre parentesis, si queremos más palabras ,iran separadas por un pipe ,(lorem|amet) es valida la palabra "lorem" y la palabra "amet"
                // /(Lorem | amet)/

                const text = document.getElementById('text').textContent
                const regEx=/lorem/gi
                const regEx2= new RegExp('lorem','gi')
                const regEx3= new RegExp('lorem','gi')

                console.log(RegExp.test(text));
                console.log(text.includes('lorem'));