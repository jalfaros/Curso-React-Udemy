
// Arreglo
// const arreglo = new Array();

const arreglo = [1,2,3,4];


// Se usa el spread para crear el nuevo arreglo
let arreglo2 = [ ...arreglo, 5 ];
//arreglo2.push(2);


//Mapear el arreglo 
// Recordar que el map devuelve 

const arreglo3 = arreglo2.map( ( numero ) => {
    return numero * 2;
});




console.log(arreglo);
console.log( arreglo2 );
console.log(arreglo3)
