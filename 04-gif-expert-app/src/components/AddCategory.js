import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => { // Recibe la función para cambiar el estado de los categories 
    

    // Estado del formulario (input)
    const [inputValue, setInputValue] = useState('');


    // Se recibe el evento del onChange y se desestructura
    // Se desestructura el evento que trae e.target.value 
    
    const handleInputChange = ( { target } ) => {

        setInputValue( target.value );
    }

    // Aquí se trabaja con la función del GifExpertApp para agregar la categoría

    const handleSubmit = ( e ) => {
        
        e.preventDefault(); // Para evitar que la página se recargue cuando se hace el submit en el form

        if( inputValue.trim().length > 2 ) {
            
            //Recibe un callback que es del state
            //Categories es el callback que trae el valor de la lista

            setCategories( categories => [ inputValue, ...categories ] );
            setInputValue('');
        }
        
    }


    return (

        <form onSubmit = { handleSubmit }>

          <input
             type = "text"
             value = { inputValue }
             placeholder = "Search gif"
             onChange = { handleInputChange }
          />

        </form>
    )
}


// Validación de que sea necesaria la función de setCategories
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}



