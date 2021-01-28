import { retornaArreglo } from '../../base/07-deses-arr'



describe('pruebas desestruc de arreglos', () => {

    test('debe retornar un string y un número ', () => {
        
        const [ letras, numeros ] = retornaArreglo();

        // expect( arrTest ).toEqual([ 'ABC', 123 ])
        expect( letras ).toBe( 'ABC' );
        expect( typeof letras ).toBe( 'string' );

        expect( numeros ).toBe( 123 );
        expect ( typeof numeros ).toBe( 'number' );

    })
    
})
