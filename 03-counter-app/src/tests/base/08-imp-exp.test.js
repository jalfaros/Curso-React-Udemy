const { getHeroeById, getHeroesByOwner } = require("../../base/08-imp-exp");
const { default: heroes } = require("../../data/heroes");


describe('pruebas en funciones de heroes', () => {

    test('debe de retornar un heroe por id', () => {

        const id = 1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find( (heroeTemp )=> {
            return heroeTemp.id === id;
        });

        expect( heroe ).toEqual( heroeData );

    });


    test('debe de retornar undefined si heroe no existe', () => {

        const id = 10;
        const heroe = getHeroeById( id );
        expect( heroe ).toBe( undefined );

    })


    // Tarea evaluar por heroes de DC
    // ToEqual

    test('debe de retornar un arreglo con el OWNER de DC Comics', () => {

        const owner = 'DC';
        const heroesArrTest = getHeroesByOwner( owner );

        const heroeDataT = heroes.filter( ( heroTemp ) => {
            return heroTemp.owner === owner;
        });
        expect( heroesArrTest ).toEqual( heroeDataT );
    });
    

    test('debe de retornar un arreglo con length 2 ', () => {
        
        const marvelData = heroes.filter( (heroTemp) => {
            return heroTemp.owner = 'Marvel';
        });


        expect( marvelData.length ).toBe( 5 );

    })
    

    
    
})
