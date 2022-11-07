const { src, dest, watch } = require("gulp"); //Cargamos el módulo de gulp
const sass = require("gulp-sass")(require('sass'));//Cargamos el plugin de gulp sass
const plumbler = require('gulp-plumber');//Cargamos el plumber

//compilar sass con gulp

function css (done){
    src("src/scss/**/*.scss")//Escuchar por todos los cambios en los archivos
    .pipe(plumbler())//Compilamos el plumber
    .pipe(sass()) //Compilar sass
    .pipe(dest("build/css"))//Almacenar el código de sass en un archivo css
    done();
}

//Escuchar por todos los cambios y compilarlos
function dev (done){
    watch("src/scss/**/*.scss", css);
    done();
}

//LLamado de las tareas
exports.css = css;
exports.dev = dev;