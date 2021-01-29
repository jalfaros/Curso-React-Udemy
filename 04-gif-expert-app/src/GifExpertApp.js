import React, { useState } from 'react'

import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['Breaking Bad ']);
    
    //const handleAdd = () => {
        //Agregar un nuevo elemento al arreglo
        // Se utiliza el spread para extraer las categorias y agregar una nueva

        /*
            Se puede cambiar el estado de las siguientes maneras
        */
   
        //setCategories( [ 'Goku', ...categories ] );
        //setCategories( categories => [ ... categories, 'Goku' ] );
    //}

    return (
        <>

            <h2>GifExpertApp</h2>

            {   /* 
                    Se pueden pasar propiedades a otro componente. Se pasa la f() del
                    use state
                */
            }

            <AddCategory setCategories = { setCategories } />
            <hr/>
            
            
            {/* Nota: cada elemento que se itere debe de tener un id único. Key? */}
            
            <ol>
                {
                    
                    categories.map( item => ( 
                        
                        <GifGrid
                            key      = { item }
                            category = { item } 
                        />
                     ))
                    
                }
            </ol>

        </>
    )
}


