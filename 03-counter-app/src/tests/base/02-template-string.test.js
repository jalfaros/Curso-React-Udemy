import { getSaludo } from '../../base/02-template-string';

describe('Pruebas 02-template-string.js', () => {
    
    test('prueba en el método getSaludo ', () => {

        const nombre = 'Jose Ignacio'

        const saludo = getSaludo( nombre );

        expect ( saludo ).toBe('Hola ' + nombre)
    })

    // Get saludo debe de retornar Hola sin nombre si no hay argumento

    test('devolver cuando no hay parametro en getSaludo ', () => {

        const saludo1 = getSaludo();

        expect ( saludo1 ).toBe( 'Hola Sin nombre' )
    })
    
    
})
