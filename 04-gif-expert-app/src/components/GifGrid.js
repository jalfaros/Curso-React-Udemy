import React, { useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {


    const { data: images, loading } = useFetchGifs( category );

    return (
        <> 
            <h3> { category } </h3>

            {/* Cuando está cargando se muestra */}

            { loading && <p>Loading...</p> }

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
