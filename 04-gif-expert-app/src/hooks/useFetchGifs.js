import { useEffect, useState } from "react"
import { genGifs } from '../helpers/getGifs' 


export const useFetchGifs = ( category ) => {
    
    const [state, setState] = useState({
        
        data: [],
        loading: true
    
    });

    useEffect( () => {

        genGifs( category )
            .then( imgs => {
                
                setState({        
                    data: imgs,
                    loading: false
                });

            });
        
    }, [ category ])




    return state; // {data: [], loading: true}


}