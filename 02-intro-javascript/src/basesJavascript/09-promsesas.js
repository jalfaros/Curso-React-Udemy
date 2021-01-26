// Promesas Javascript

const { getHeroeById } = require("./basesJavascript/08-imp-export");





// promesa.then( ( response ) => {
//     const { name, owner } = response;
//     console.log(`Recibiendo desde la promesa:  ${ name } ${ owner } `)
// }).catch( (err) => {
//     console.log( err )
// })

const getHeroeByIdAsync = ( idHero ) => {

    return new Promise( ( resolve, reject ) => {

        setTimeout(() => {
            
            const heroe = getHeroeById( idHero );

            if ( heroe ){
                resolve( heroe );
            }

            reject('No se pudo encontrar el heroe');

        }, 2000);

    });

}


getHeroeByIdAsync(3).then( (response) => {
    
    const { name, owner } = response;
    console.log(`Recibiendo desde la promesa:  ${ name } ${ owner } `)

}).catch( (err) => {
    console.log(err)
})







