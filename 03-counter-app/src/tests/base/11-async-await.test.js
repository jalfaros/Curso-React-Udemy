const { getImagen } = require("../../base/11-async-await")



// Pruebas cuando se usa el async y el await para
describe('Pruebas con async-await fetch al api de Giphy', () => {


    test('debe retornar el url de gif', async () => {

        const url = await getImagen();

        expect( typeof url ).toBe( 'string' );

    });
    

});
