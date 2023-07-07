function contarRepeticiones(nombres){
    const contarNombre = {};

    for (i = 0; i < nombres.length; i++){
        const nombre = [i];
        if (contarNombre[nombre]){
            contarNombre[nombre]++;            
        } else {
            contarNombre[nombre] = 1;
        }
    }

    const resultado ={};

    for (const nombre in contarNombre){
        const contar = contarNombre[nombre];
        resultado[nombre] = '*'.repeat(contar);
    }
    return resultado;
}

const nombres = [ 'maria','juan','jhon','carlos','maria','juan'];
const repeticionesNombre = contarRepeticiones(nombres);
console.log (repeticionesNombre);
