const { getHeroeByIdAsync } = require("../../base/09-promesas");
const { default: heroes } = require("../../data/heroes");

/*
    Pruebas cuando se hace con funciones asíncronas sin el async-await
    El test recibe como callback el done para ponerlo al final de cada test
    
*/
describe('pruebas con promesas', () => {

    test('debe retornar un heroe async', ( done ) => {
        
        const id = 1;

        getHeroeByIdAsync( id )
            .then( heroe => {
                
                expect( heroe ).toBe( heroes[0] );
                done();

            })

    })

    test('debe de obtener error si no hay heroe por id', ( done ) => {

        const id = 10;
        getHeroeByIdAsync( id )
            .catch( error => {

                expect( error ).toBe( 'No se pudo encontrar el héroe' );
                done();

            });

    })
    
    

})
