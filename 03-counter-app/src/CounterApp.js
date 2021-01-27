import React, { useState } from 'react';
import PropTypes from 'prop-types';



const CounterApp = ( { value } ) => {

    
    // Hook - Use State
    // El state no muta por lo que no se puede sobreescribir

    const [ counter, setCounter ] = useState( value );


    // handleAdd función de cambio
    // En esta función se llama el set del state para realizar el cambio
    // Esta función handle se dispara en el momento que se haga click en
    // el button 
    const handleAdd = () => {
        setCounter( counter + 1 );
    }

    return (

        <>
            <h1>CounterApp</h1>
            <h2> Valor: { counter } </h2>


            {/* 
                Se va manejar el evento del click 
                Ambas expresiones abajo son exactamente las mismas
                Son "mejoras" que me permite JavaScript
            */}

            {/* <button onClick = { (e) => handleAdd(e) } >+1</button> */}
            <button onClick = { handleAdd } >+1</button>
            {/* 
                Se puede hacer de la manera de arriba o
                también se puede llamar de una vez a la función que
                contiene el state para mayor facilidad y simplicidad en
                el código 
            */}
            <button onClick = { () => setCounter( value )}>Reset</button>
            <button onClick = { () => setCounter( counter - 1)}>-1</button>
       
        </>

    );

}




//Validación de que se envíe el prop necesario para el funcionamiento
CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;


