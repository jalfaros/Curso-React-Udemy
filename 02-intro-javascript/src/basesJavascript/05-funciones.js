// Funciones en Javascript

// Se crearán varios tipos de funciones

function saludar( nombre ) {
    return `Hola, ${ nombre }`
}

console.log( saludar( 'Jose Ignacio' ) )

// Creando funciones para una constante, de esta manera es mejor
// porque previene que se le caiga encima y cambie el tipo de dato

const saludar2  = function( nombre ) {
    return `Holis, ${ nombre }. Crack!`
};

console.log( saludar2( 'Cristiano Ronaldo' ) )


// Tambien se utiliza las funciones de flecha que son lambdas
// Ventaja: al tener un solo return se puede simplificar el codigo

const saludar3 = ( nombre ) => {
    return `Hola, ${ nombre  }`
};

 // Simplificado
const saludar4 = ( nombre ) => `Hola desde flecha simplificada, ${ nombre }`;


console.log( saludar3( 'Saludando desde la flecha' ) );
console.log( saludar4( 'Jose Ignacio Alfaro' ) )


// Devolver un objeto de manera normal *Funcion de flecha 
const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'jalfaros'
    }
}

// Devolver un objeto sin el return y de manera directa
// Se encierra dentro de parentesis

const getUser1 = () => ({ 
    uid: 'ABC123',
    username: 'jalfaros' 
})

console.log( getUser() )
console.log( getUser1() );


// Tarea
// 1. Transformar a una de flecha
// 2. Devolver un objeto implicito

console.log('Imprimiendo de la tarea')

function getUsuarioActivo( nombre ){
    return {
        uid: 'ABC2599',
        username: nombre
    }
}

const activeUser = getUsuarioActivo('Nacho');
console.log(activeUser);


const arrowActiveUser = ( nombre ) => ({
    uid: 'ABC9925',
    username: nombre
})

console.log( arrowActiveUser( 'ArrowUserTest' ) )


