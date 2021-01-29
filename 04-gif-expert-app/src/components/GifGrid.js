import React, { useState, useEffect  } from 'react'
import { genGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {


    const [ images, setImages ] = useState( [] );

    
    /* 
        Se utiliza para ejecutar alguna acción solo las veces que se desee
        por lo que el arreglo del useEffect van a ser las dependencias que
        van hacer que lo que hay dentro se ejecute
    */
    
    useEffect( () => {

        genGifs( category ).then( (imgs) => {
            setImages( imgs );    
        });

    }, [ category ]);





    /*En el map se procede a desestructurar el objeto*/
    return (
        <> 
            <h3> { category } </h3>
            <div className = "card-grid">
                {
                    images.map( image => (
                        <GifGridItem
                            key = { image.id } 
                            image = { image } 
                        />
                    ))
                }               
            </div>
        </>
    )
}
