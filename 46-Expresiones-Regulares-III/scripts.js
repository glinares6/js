
    // https://regex101.com/
    // sintaxis
        // /patron/

        // https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
        
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

            // Delimitadores
                // ^  antes de este simbolo no puede haber nada
                // $ despues de ete simbolo no puede haber nada
                // ^Hola$
            // C antidad
                // llaves-> lo que esta antes tiene que aparecer la cantidad exacta de veces.Hay tres conbinaciones posible.
                    // {n} -> se tine que repetir n veces
                    // {n,m} ->se tiene que repatir entre n y m veces,ambos incluidos
                    // {n,} se tiene que repetir como minimo n veces,sin maximo

                // ^[a-zA-Z]{1,3}@{1} aaa@1
                // asterisco-> lo que esta antes del asterisco,puede estar ,puede no estar y se puede repetir.   .*@.*\..* asdfas@dfas.asdfasdf
                // A-[0-9]*  A-13423434535234532

                // Interrogación:Lo que esta antes d ela interrogación puede entrar.Pero si esta, solo puede aparecer una vez 
                // ^[ae]?$   a    ^[a-zA-Z]{1,3}@ adfasdf@adsf
                    // operador + -> lo que esta antes del + tiene que estar una vez como minimo 
                    // A-[0-9]+  A-3242134

                
                    const text = document.getElementById('text').textContent
                    const text = document.getElementById().textContent
                    const regEx=/lorem/gi
                    const regEx2= new RegExp('lorem','gi')
                    const regEx3= new RegExp('lorem','gi')
    
                    console.log(RegExp.test(text));
                    console.log(text.includes('lorem'));



            