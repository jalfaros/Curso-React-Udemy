import React from 'react';
import PropTypes from 'prop-types';


//Un componente puede recibir las props en su función

/*
    Todo lo que se reciba viene en formato de objeto, por lo que...
    es mejor hacer la desestructuración para solo utilizar lo necesario
    Además de que la convención de desarrollo.
*/

const PrimeraApp = ( { saludo, subtitle } ) => { // Se puede desestructurar

    
    return (
        <>
            <h1> { saludo } </h1>
            {/* <pre>{ JSON.stringify( objeto, 3 ) }</pre> */}
            <p> { subtitle } </p>
        </>
    
    );

}

/*
    Acá se hace la importación del prop-types
    Se utiliza para requerir el tipo de dato para el 
    funcionamiento de mi componente, por lo que se obliga a enviar
    los valores o datos que el componente necesita para su normal
    funcionamiento

    También existen los default props
*/

PrimeraApp.propTypes = {

    saludo : PropTypes.string.isRequired
}

// Por lo general se hace esto directamente en el prop igualando al
// al valor por defecto

PrimeraApp.defaultProps = {
    subtitle: 'Soy un subtitulo'
}

export default PrimeraApp;