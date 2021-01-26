
// Templates de string - Concatenación de string
const nombre = 'Jose Ignacio'
const apellido = 'Alfaro'



const nombreCompleto = `${nombre} ${apellido} Solano`
console.log( nombreCompleto )


function getSaludo(  ) {
    return 'Hola Mundo' ;
}

console.log(`Este es un texto de prueba: ${ getSaludo() }`);