//?node --version    npm--version

//* npm init -y  

//* npm install @babel/cli @babel/core @babel/polyfill @babel/preset-env @babel/register @babel/register gulp gulp-babel gulp-concat gulp-plumber gulp-uglify --save-dev

//* npm install -g gulp (solo una vez)

//* para integrar babel a otros proyectos se debe  crear la estructura de carpetas dev public 
///*importar los archivos gulpfile.babel.js  package.json  .babelrc y en la terminal npm install

const numbers=[1,2,3,4,5]

const printNubers=()=>{
    console.log(...numbers);
}