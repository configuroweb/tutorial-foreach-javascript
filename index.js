/*

// Ejemplo forEach

const arreglo = ['rojo','azul','verde'];
function recorrer(registro){
    console.log(registro)
}

arreglo.forEach(recorrer);

*/

// Ejemplo forEach con índice

/*
const arreglo = ['rojo','azul','verde'];
function recorrer(registro,indice){
    console.log(`El registro ${registro} tiene como índice al ${indice}`)
}

arreglo.forEach(recorrer);

*/



// Ejemplo forEach con índice y arreglo

const arreglo = ['rojo','','verde'];
function recorrer(registro,indice,arreglo){
    console.log(registro);
    if(indice === arreglo.length - 1){
        console.log('Fin del arreglo');
    }
}

arreglo.forEach(recorrer);






