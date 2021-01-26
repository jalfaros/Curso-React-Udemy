//Ejemplo con arreglos, importaciones y exportaciones

import  heroes, { owners }  from '../data/heroes'

//console.log(owners)

// Find se utiliza para devolver un solo objeto que cumpla con la condicion
// Nota: devuelve solo uno

export const getHeroeById = ( heroId ) => {
    return heroes.find( (actualHero) => actualHero.id === heroId )
}

//console.log( getHeroeById( 2 ) );
 

// Filter se utiliza para devolver más de un objeto que cumpla con la
// condicion
// Nota: devuelve más de uno

export const getHeroesByOwner = ( owner ) => {
    return heroes.filter( (actualOwner)  => actualOwner.owner === owner )
}

//console.log( getHeroesByOwner('Marvel') );


